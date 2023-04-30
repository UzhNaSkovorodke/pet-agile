import React, {useState} from 'react';

import MainPopup from '../../UiKit/Popup/MainPopup/MainPopup';

import styles from './Ticket.module.scss';
import TicketDate from './TicketDate/TicketDate';

export interface iTicket {
  completed: boolean;
  userId: number;
  id: number;
  title: string;
}

interface ITicketProps {
  ticketObject: iTicket;
}

const Ticket: React.FunctionComponent<ITicketProps> = ({ticketObject}) => {
  const [isModalActive, setIsModalActive] = useState(false);

  if (ticketObject) {
    return (
      <>
        <div className={`${styles.ticket} ${styles.red}`} onClick={() => setIsModalActive(true)}>
          <div className={styles.statusWrapper}>
            <div className={[styles.status, ticketObject.completed ? styles.done : styles.make].join(' ')}>
              {String(ticketObject.completed)}
            </div>
          </div>
          <div className={styles.title}>{ticketObject.title}</div>
          <div className={styles.panel}>
            <div className={styles.date}>
              <TicketDate />
            </div>
            <div className={styles.descript}>descr</div>
            <div className={styles.attached}>attach</div>
          </div>
        </div>

        <MainPopup onClose={setIsModalActive} isOpened={isModalActive}>
          <div className={styles.modal}>
            <div className={styles.modal_title}>{ticketObject.title}</div>
          </div>
        </MainPopup>
      </>
    );
  } else {
    return <div className={styles.ticket}>Данные тикета прогружаются</div>;
  }
};

export default Ticket;
