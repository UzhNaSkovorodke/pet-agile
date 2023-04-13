import * as React from 'react';
import {ReactNode} from 'react';

import styles from './Ticket.module.scss';

interface ITicketProps {
  children?: ReactNode;
}

const Ticket: React.FunctionComponent<ITicketProps> = ({children}) => {
  return (
    <div className={styles.ticketWrapper}>
      <div className={styles.ticket}>{children}</div>
    </div>
  );
};

export default Ticket;
