import React, {useEffect, useMemo, useState} from 'react';

import {url} from '../../API/api';
import {ITicket} from '../../components/Ticket/Ticket';
import TaskContext from '../../context/TicketContext';
import {useFetch} from '../../hooks/useFetch';
import Board from '../../modules/Board/Board';
import Search from '../../modules/Search/Search';

import styles from './Kanban.module.scss';

interface Kanban {}

const Kanban: React.FunctionComponent<Kanban> = props => {
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
    const id = 1;
    try {
      setIsLoading(true);
      fetch(`${url}/task/user${id}`)
        .then(response => response.json())
        .then(json => {
          setTickets(json);
        });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
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
            <Board key={Date.now() + Math.random()} setTickets={setTickets} board={{tickets: searchedPost, id: 1, title: 'Надо сделать'}} />
          </div>
        </TaskContext.Provider>
      </div>
    );
  }
};

export default Kanban;
