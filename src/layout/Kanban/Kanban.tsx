import React, {useEffect, useMemo, useState} from 'react';

import {url} from '../../API/api';
import Board from '../../components/Board/Board';
import {ITicket} from '../../components/Ticket/Ticket';
import TaskContext from '../../context/TicketContext';
import {useFetch} from '../../hooks/useFetch';
import Search from '../../modules/Search/Search';

import styles from './Kanban.module.scss';

interface Kanban {}

export interface IBoardData {
  title: string;
  id: number;
  user_id: number;
  id_tasks: number[];
}

const Kanban: React.FunctionComponent<Kanban> = props => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [boards, setBoards] = useState<IBoardData[]>([]);
  const [filter, setFilter] = useState('');
  const {isLoading, response, error} = useFetch(`${url}/task/user${1}`);

  const ticketValue = {
    tickets,
    setTickets,
    isModalActive,
    setIsModalActive,
    boards,
    setBoards
  };

  const searchFunc = function (value: string) {
    setFilter(value);
  };

  const getBoards = async () => {
    await fetch(`${url}/board/user/${1}`)
      .then(resp => resp.json())
      .then(json => setBoards(json));
  };

  const searchedTask = useMemo(() => {
    if (filter) {
      return [...tickets].filter((element: ITicket) => element.title.toLowerCase().includes(filter.toLowerCase())).sort();
    } else {
      return tickets;
    }
  }, [filter, tickets]);

  useEffect(() => {
    if (!isLoading && response) {
      setTickets(response);
      getBoards();
    }
  }, [response]);

  if (isLoading) {
    return <h1>Загружается...</h1>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className={styles.kanban}>
      <Search filter={filter} searchFunc={searchFunc} />

      <TaskContext.Provider value={ticketValue}>
        <div className={styles.boardWrapper}>
          {boards &&
            tickets &&
            boards.map(element => (
              <Board
                key={Date.now() + Math.random()}
                setTickets={setTickets}
                board={{
                  id_tasks: element.id_tasks,
                  tickets: searchedTask.filter((task: ITicket) => element.id_tasks.includes(task.id)),
                  id: element.id,
                  title: element.title
                }}
              />
            ))}
        </div>
      </TaskContext.Provider>
    </div>
  );
};

export default Kanban;
