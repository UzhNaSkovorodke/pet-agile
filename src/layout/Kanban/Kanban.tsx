import React, {useEffect, useMemo, useState} from 'react';

import {fetchBoard, fetchTask} from '../../API/api';
import Board from '../../components/Board/Board';
import {ITicket} from '../../components/Ticket/Ticket';
import TaskContext from '../../context/TicketContext';
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

  const searchedTask = useMemo(() => {
    if (filter) {
      return [...tickets].filter((element: ITicket) => element.title.toLowerCase().includes(filter.toLowerCase())).sort();
    } else {
      return tickets;
    }
  }, [filter, tickets]);

  useEffect(() => {
    fetchTask.getTasks(1).then(data => setTickets(data));
    fetchBoard.getBoards(1).then(data => setBoards(data));
  }, []);

  return (
    <div className={styles.kanban}>
      <Search filter={filter} searchFunc={searchFunc} />

      <TaskContext.Provider value={ticketValue}>
        <div className={styles.boardWrapper}>
          {boards.map(element => (
            <Board
              key={Date.now() + Math.random()}
              board={element}
              setTickets={setTickets}
              tickets={searchedTask.filter((task: ITicket) => element.id_tasks.includes(task.id))}
            />
          ))}
        </div>
      </TaskContext.Provider>
    </div>
  );
};

export default Kanban;
