import {useContext, useState} from 'react';

import {fetchBoard, fetchTask} from '../../API/api';
import TicketContext, {ITicketContext} from '../../context/TicketContext';
import {IBoardData} from '../../layout/Kanban/Kanban';
import MainPopup from '../../ui/Popup/MainPopup/MainPopup';
import TicketForm from '../Ticket/TicketForm/TicketForm';

import styles from './AddTicket.module.scss';

interface IAddTicketProps {
  board: IBoardData;
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
    fetchTask.createTask(newTask);
    fetchBoard.updateBoard(board.id, {...board, id_tasks: [...board.id_tasks, newTask.id]});

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
