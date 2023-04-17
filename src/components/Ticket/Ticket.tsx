import React, {useEffect, useState} from 'react';

import styles from './Ticket.module.scss';

interface iTicket {
  completed: boolean;
  userId: number;
  id: number;
  title: string;
  color?: string;
}

interface ITicketProps {
  ticketObject: iTicket;
}

const Ticket: React.FunctionComponent<ITicketProps> = ({ticketObject}) => {
  const [ticket, setTicket] = useState<iTicket | null>(null);

  useEffect(() => {
    setTicket(ticketObject);
  }, [ticketObject]);

  if (ticket) {
    return (
      <div className={styles.ticketWrapper}>
        <div className={styles.ticket}>
          <div className={[styles.ticket__status, ticket.completed ? styles.done : styles.make].join(' ')}>{String(ticket.completed)}</div>
          <div className={styles.ticket__descript}>{ticket.title}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.ticketWrapper}>
        <div className={styles.ticket}>Данные тикета прогружаются</div>
      </div>
    );
  }
};

export default Ticket;
