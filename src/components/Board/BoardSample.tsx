import * as React from 'react';

import {IBoard} from '../../models/Board';
import Ticket from '../Ticket/Ticket';

import styles from './BoardSample.module.scss';

interface IBoardSampleProps {
  board: IBoard;
}

const BoardSample: React.FunctionComponent<IBoardSampleProps> = ({board}) => {
  console.log(board);

  return (
    <div className={styles.board}>
      {board.tickets.length > 0 && board.tickets.map((element: any, index: number) => <Ticket key={index}>{element.title}</Ticket>)}
    </div>
  );
};

export default BoardSample;
