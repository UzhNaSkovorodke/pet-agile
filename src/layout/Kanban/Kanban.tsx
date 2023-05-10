import axios from 'axios';
import React, {useEffect, useMemo, useState} from 'react';

import {url} from '../../API/api';
import Board from '../../components/Board/Board';
import Search from '../../components/Search/Search';
import {ITicket} from '../../components/Ticket/Ticket';

import styles from './Kanban.module.scss';
import TaskContext from './TicketContext';

interface IKanbanNewProps {}

const KanbanNew: React.FunctionComponent<IKanbanNewProps> = props => {
  const task = {
    title: 'Помыть кухню',
    description: 'Нужно будет помыть полы в кухне к вечеру',
    userid: 1,
    id: Date.now(),
    completed: false,
    typeboard: 'Надо сделать'
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const [filter, setFilter] = useState('');

  const ticketValue = {
    tickets,
    setTickets
  };

  const searchFunc = function (value: string) {
    setFilter(value);
  };

  const searchedPost = useMemo(() => {
    //сделать так чтобы не ререндерилось если таски после введение нового символа не поменялись (использовать новый state?)
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

  async function createTask() {
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
      })
        .then(response => response.json())
        .then(json => setTickets([...tickets, json]));
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

          <button onClick={() => createTask()}>Создать таску</button>
          <button onClick={() => getTask(1)}>1 таск</button>
        </TaskContext.Provider>
      </div>
    );
  }
};

export default KanbanNew;
