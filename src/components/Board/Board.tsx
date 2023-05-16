import * as React from 'react';

import AddTicket from '../AddTicket/AddTicket';
import Ticket, {ITicket} from '../Ticket/Ticket';

import styles from './Board.module.scss';

export interface IBoard {
  tickets: ITicket[];
  title: string;
  id: number;
  id_tasks: number[];
}

interface IBoardProps {
  board: IBoard;
  setTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
}

const Board: React.FunctionComponent<IBoardProps> = ({board, setTickets}) => {
  return (
    <div className={styles.board}>
      <div className={styles.head}>
        <div>{board.title}</div>
        <button>...</button>
      </div>
      <div className={styles.main}>
        {board.tickets.length > 0 &&
          board.tickets.map((element: ITicket) => <Ticket board={board} key={element.id} setTickets={setTickets} ticketObject={element} />)}
      </div>

      <AddTicket board={board} />
    </div>
  );
};

export default Board;
