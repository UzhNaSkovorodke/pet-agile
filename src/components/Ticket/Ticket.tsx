import React, {useState} from 'react';

import MainPopup from '../../UiKit/Popup/MainPopup/MainPopup';
import CustomCheck from '../../UiKit/input/CustomCheck/CustomCheck';

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
  const [IsdidTask, setIsDidTask] = useState(false);

  function doingTaskHelper(status: boolean) {
    setIsDidTask(status);
  }

  function labelClickHandler(e: any) {
    e.stopPropagation();
  }

  if (ticketObject) {
    return (
      <>
        <div
          className={`${styles.ticket} ${IsdidTask ? styles.ticketDisable : styles.ticketActive}`}
          onClick={() => setIsModalActive(true)}
        >
          <label className={styles.status} onClick={e => labelClickHandler(e)}>
            <CustomCheck onChange={doingTaskHelper} />
            <span className={[styles.labelText, IsdidTask ? styles.disable : styles.active].join(' ')}>
              {IsdidTask ? 'Сделано' : 'Не сделано'}
            </span>
          </label>

          <div className={styles.title}>{ticketObject.title}</div>
          <div className={styles.panel}>
            <div className={styles.date}>
              <TicketDate />
            </div>
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
