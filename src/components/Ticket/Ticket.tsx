import React, {useState} from 'react';

import {url} from '../../API/api';
import MainPopup from '../../UiKit/Popup/MainPopup/MainPopup';
import CustomCheck from '../../UiKit/input/CustomCheck/CustomCheck';

import styles from './Ticket.module.scss';
import TicketDate from './TicketDate/TicketDate';
import TicketForm from './TicketForm/TicketForm';

export interface ITicket {
  completed: boolean;
  userId: number;
  id: number;
  title: string;
  description: string;
  typeboard: string;
}

interface ITicketProps {
  ticketObject: ITicket;
  setTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
}

const Ticket: React.FunctionComponent<ITicketProps> = ({ticketObject}) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isDidTask, setisDidTask] = useState<boolean>(ticketObject.completed);
  const [title, setTitle] = useState<string>(ticketObject.title);
  const [description, setDescription] = useState<string>(ticketObject.description);

  console.log('dsd');

  async function updateStatusTask() {
    setisDidTask(prev => !prev);
    const task = ticketObject;
    task.completed = !isDidTask;
    await fetch(`${url}/${ticketObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    });
  }

  async function updateTextTask(title: string, description: string) {
    const task = ticketObject;
    task.title = title;
    task.description = description;
    await fetch(`${url}/${ticketObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    });
  }

  function onModalClose(modalStatus: boolean) {
    setIsModalActive(modalStatus);
    updateTextTask(title, description);
  }

  function labelClickHandler(e: React.MouseEvent<HTMLLabelElement>) {
    e.stopPropagation();
  }

  if (ticketObject) {
    return (
      <>
        <div
          className={`${styles.ticket} ${isDidTask ? styles.ticketDisable : styles.ticketActive}`}
          onClick={() => setIsModalActive(true)}
        >
          <label className={styles.taskStatus} onClick={e => labelClickHandler(e)}>
            <CustomCheck value={isDidTask} onChange={updateStatusTask} />
            <span className={[styles.labelText, isDidTask ? styles.disable : styles.active].join(' ')}>
              {isDidTask ? 'Сделано' : 'Не сделано'}
            </span>
          </label>

          <div className={styles.title}>{title}</div>
          <div className={styles.panel}>
            <div className={styles.date}>
              <TicketDate />
            </div>
          </div>
        </div>

        <MainPopup onClose={onModalClose} isOpened={isModalActive}>
          <TicketForm
            setTitle={setTitle}
            title={title}
            setDescription={setDescription}
            description={description}
            ticketObject={ticketObject}
          />
        </MainPopup>
      </>
    );
  } else {
    return <div className={styles.ticket}>Данные тикета прогружаются</div>;
  }
};

export default Ticket;
