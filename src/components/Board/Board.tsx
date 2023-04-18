import * as React from 'react';

import Ticket from '../Ticket/Ticket';

import styles from './Board.module.scss';

interface iBoard {
  boardTitle: string;
  boardColor: string;
  tickets: any;
  title: string;
  id: number;
}

interface IBoardProps {
  board: iBoard;
}

const Board: React.FunctionComponent<IBoardProps> = ({board}) => {
  return (
    <div className={styles.board}>
      <div className={styles.board__head}>{board.title}</div>
      <div className={styles.board__main}>
        {board.tickets.length > 0 && board.tickets.map((element: any) => <Ticket key={element.id} ticketObject={element} />)}
      </div>
    </div>
  );
};

export default Board;
