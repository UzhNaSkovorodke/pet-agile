import React, {useEffect, useState} from 'react';

import styles from './Ticket.module.scss';
import TicketDate from './TicketDate/TicketDate';

interface iTicket {
  completed: boolean;
  userId: number;
  id: number;
  title: string;
}

interface ITicketProps {
  ticketObject: iTicket;
  color?: string;
}

const Ticket: React.FunctionComponent<ITicketProps> = ({ticketObject, color}) => {
  const [ticket, setTicket] = useState<iTicket | null>(null);

  useEffect(() => {
    setTicket(ticketObject);
  }, [ticketObject]);

  if (ticket) {
    return (
      <div className={styles.ticketWrapper}>
        <div className={`${styles.ticket} ${styles.red}`}>
          <div className={styles.ticket__status}>
            <div className={styles.status__checkBox} />
            <div className={[styles.status__title, ticket.completed ? styles.done : styles.make].join(' ')}>{String(ticket.completed)}</div>
          </div>

          <div className={styles.ticket__title}>{ticket.title}</div>

          <div className={styles.ticket__panel}>
            <div className={styles.panel__date}>
              <TicketDate />
            </div>
            <div className={styles.panel__descript}>descr</div>
            <div className={styles.panel__attached}>attach</div>
          </div>
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
