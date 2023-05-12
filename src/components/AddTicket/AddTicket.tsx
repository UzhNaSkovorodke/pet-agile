import {useContext, useState} from 'react';

import {url} from '../../API/api';
import TicketContext, {ITicketContext} from '../../context/TicketContext';
import MainPopup from '../../ui/Popup/MainPopup/MainPopup';
import TicketForm from '../Ticket/TicketForm/TicketForm';

import styles from './AddTicket.module.scss';

interface IAddTicketProps {}

export default function AddTicket(props: IAddTicketProps) {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const newTask = {
    title: title,
    description: description,
    userId: 1,
    id: Date.now() * 1000,
    completed: false,
    typeboard: 'Надо сделать'
  };

  const taskContext = useContext<ITicketContext>(TicketContext);

  async function createTask(title: string, description: string) {
    await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newTask)
    });

    taskContext.setTickets([...taskContext.tickets, newTask]);
  }

  function onModalClose(modalStatus: boolean) {
    setIsModalActive(modalStatus);
    createTask(title, description);
  }
  return (
    <>
      <button className={styles.addcomponent} onClick={() => setIsModalActive(true)}>
        + Новая таска
      </button>
      ;
      <MainPopup onClose={onModalClose} isOpened={isModalActive}>
        <TicketForm ticketObject={newTask} setTitle={setTitle} title={title} description={description} setDescription={setDescription} />
      </MainPopup>
    </>
  );
}
