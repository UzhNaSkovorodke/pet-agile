import * as React from 'react';

import Ticket, {iTicket} from '../Ticket/Ticket';

import styles from './Board.module.scss';

interface iBoard {
  boardTitle: string;
  tickets: iTicket[];
  title: string;
  id: number;
}

interface IBoardProps {
  board: iBoard;
}

const Board: React.FunctionComponent<IBoardProps> = ({board}) => {
  return (
    <div className={styles.board}>
      <div className={styles.head}>{board.title}</div>
      <div className={styles.main}>
        {board.tickets.length > 0 && board.tickets.map((element: iTicket) => <Ticket key={element.id} ticketObject={element} />)}
      </div>
    </div>
  );
};

export default Board;
