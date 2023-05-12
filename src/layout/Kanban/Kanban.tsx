import React, {useEffect, useMemo, useState} from 'react';

import {url} from '../../API/api';
import {ITicket} from '../../components/Ticket/Ticket';
import TaskContext from '../../context/TicketContext';
import Board from '../../modules/Board/Board';
import Search from '../../modules/Search/Search';

import styles from './Kanban.module.scss';

interface IKanbanNewProps {}

const KanbanNew: React.FunctionComponent<IKanbanNewProps> = props => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const [filter, setFilter] = useState('');

  const ticketValue = {
    tickets,
    setTickets,
    isModalActive,
    setIsModalActive
  };

  const searchFunc = function (value: string) {
    setFilter(value);
  };

  const searchedPost = useMemo(() => {
    if (filter) {
      return [...tickets].filter((element: ITicket) => element.title.toLowerCase().includes(filter.toLowerCase())).sort();
    } else {
      return tickets;
    }
  }, [filter, tickets]);

  async function getTasks() {
    try {
      setIsLoading(true);
      fetch(url)
        .then(response => response.json())
        .then(json => setTickets(json));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getTask(id: number) {
    try {
      fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(json => console.log(json));
    } catch (error: any) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  if (error) {
    return <div className={styles.error}>Ошибка, что-то не прогрузилось</div>;
  } else if (isLoading) {
    return <div className={styles.loading}>Данные прогружаются</div>;
  } else {
    return (
      <div className={styles.kanban}>
        <Search filter={filter} searchFunc={searchFunc} />

        <TaskContext.Provider value={ticketValue}>
          <div className={styles.boardWrapper}>
            <Board setTickets={setTickets} board={{boardTitle: 'Надо сделать', tickets: searchedPost, id: 1, title: 'Нужно сделать'}} />
          </div>
        </TaskContext.Provider>
      </div>
    );
  }
};

export default KanbanNew;
