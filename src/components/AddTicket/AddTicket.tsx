import {useContext, useState} from 'react';

import {url} from '../../API/api';
import TicketContext, {ITicketContext} from '../../context/TicketContext';
import MainPopup from '../../ui/Popup/MainPopup/MainPopup';
import {IBoard} from '../Board/Board';
import TicketForm from '../Ticket/TicketForm/TicketForm';

import styles from './AddTicket.module.scss';

interface IAddTicketProps {
  board: IBoard;
}

export default function AddTicket({board}: IAddTicketProps) {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const newTask = {
    title: title,
    description: description,
    user_id: 1,
    id: Date.now() * 1000,
    completed: false,
    board_id: board.id
  };

  const taskContext = useContext<ITicketContext>(TicketContext);

  async function createTask() {
    await fetch(`${url}/task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newTask)
    });

    await fetch(`${url}/board/boardtasks/${board.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({id_tasks: [...board.id_tasks, newTask.id]})
    });

    let boards = [...taskContext.boards];
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].id === board.id) {
        boards[i].id_tasks = [...board.id_tasks, newTask.id];
      }
    }

    taskContext.setBoards(boards);
    taskContext.setTickets([...taskContext.tickets, newTask]);
  }

  function onModalClose(modalStatus: boolean) {
    if (title && description) {
      createTask();
    }
    setIsModalActive(modalStatus);
  }

  return (
    <>
      <button className={styles.addcomponent} onClick={() => setIsModalActive(true)}>
        + Новая таска
      </button>

      <MainPopup onClose={onModalClose} isOpened={isModalActive}>
        <TicketForm ticketObject={newTask} setTitle={setTitle} title={title} description={description} setDescription={setDescription} />
      </MainPopup>
    </>
  );
}
