import * as React from 'react';

import {IBoardData} from '../../layout/Kanban/Kanban';
import AddTicket from '../AddTicket/AddTicket';
import Ticket, {ITicket} from '../Ticket/Ticket';

import styles from './Board.module.scss';

interface IBoardProps {
  tickets: ITicket[];
  board: IBoardData;
  setTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
}

const Board: React.FunctionComponent<IBoardProps> = ({board, setTickets, tickets}) => {
  return (
    <div className={styles.board}>
      <div className={styles.head}>
        <div>{board.title}</div>
        <button>...</button>
      </div>
      <div className={styles.main}>
        {tickets.length > 0 &&
          tickets.map((element: ITicket) => <Ticket board={board} key={element.id} setTickets={setTickets} ticketObject={element} />)}
      </div>

      <AddTicket board={board} />
    </div>
  );
};

export default Board;
