import * as React from 'react';

import AddTicket from '../../components/AddTicket/AddTicket';
import Ticket, {ITicket} from '../../components/Ticket/Ticket';

import styles from './Board.module.scss';

interface iBoard {
  boardTitle: string;
  tickets: ITicket[];
  title: string;
  id: number;
}

interface IBoardProps {
  board: iBoard;
  setTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
}

const Board: React.FunctionComponent<IBoardProps> = ({board, setTickets}) => {
  return (
    <div className={styles.board}>
      <div className={styles.head}>{board.title}</div>
      <div className={styles.main}>
        {board.tickets.length > 0 &&
          board.tickets.map((element: ITicket) => <Ticket key={element.id} setTickets={setTickets} ticketObject={element} />)}
      </div>

      <AddTicket />
    </div>
  );
};

export default Board;
