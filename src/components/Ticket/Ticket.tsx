import React, {useContext, useState} from 'react';

import {fetchBoard, fetchTask, url} from '../../API/api';
import cross from '../../assets/icon/cross.png';
import TicketContext, {ITicketContext} from '../../context/TicketContext';
import {IBoardData} from '../../layout/Kanban/Kanban';
import MainPopup from '../../ui/Popup/MainPopup/MainPopup';
import CustomCheck from '../../ui/input/CustomCheck/CustomCheck';

import styles from './Ticket.module.scss';
import TicketForm from './TicketForm/TicketForm';

export interface ITicket {
  completed: boolean;
  user_id: number;
  id: number;
  title: string;
  description: string;
  board_id: number;
}

interface ITicketProps {
  ticketObject: ITicket;
  board: IBoardData;
  setTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
}

const Ticket: React.FunctionComponent<ITicketProps> = ({ticketObject, board}) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isDidTask, setisDidTask] = useState<boolean>(ticketObject.completed);
  const [title, setTitle] = useState<string>(ticketObject.title);
  const [description, setDescription] = useState<string>(ticketObject.description);

  const taskContext = useContext<ITicketContext>(TicketContext);

  async function updateStatusTask() {
    setisDidTask(prev => !prev);
    const task = {...ticketObject, completed: !isDidTask};
    fetchTask.updateTask(ticketObject.id, task);
  }

  async function updateTextTask() {
    fetchTask.updateTask(ticketObject.id, {...ticketObject, title: title, description: description});
  }

  function onModalClose(modalStatus: boolean) {
    setIsModalActive(modalStatus);
    updateTextTask();
  }

  function labelClickHandler(e: React.MouseEvent<HTMLLabelElement>) {
    e.stopPropagation();
  }

  async function deleteTicket(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();
    fetchTask.deleteTask(ticketObject.id);

    let boards = [...taskContext.boards];
    let currentBoard = {}; //зачем это
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].id === board.id) {
        boards[i].id_tasks = boards[i].id_tasks.filter((element: number) => element !== ticketObject.id);
        currentBoard = boards[i];
      }
    }
    fetchBoard.updateBoard(currentBoard);
    taskContext.setBoards(boards);
    taskContext.setTickets(taskContext.tickets.filter(element => element.id != ticketObject.id));
  }

  if (ticketObject) {
    return (
      <>
        <div className={`${styles.ticket} ${isDidTask ? styles.disable : styles.active}`} onClick={() => setIsModalActive(true)}>
          <div className={styles.header}>
            <label className={styles.status} onClick={e => labelClickHandler(e)}>
              <CustomCheck value={isDidTask} onChange={updateStatusTask} />
              <span className={[styles.label_text, isDidTask ? styles.text_disable : styles.text_active].join(' ')}>
                {isDidTask ? 'Сделано' : 'Не сделано'}
              </span>
            </label>

            <button onClick={e => deleteTicket(e)} className={styles.delete}>
              <img src={cross} alt="Закрыть задачу" />
            </button>
          </div>

          <div className={styles.main}>
            <div className={styles.title}>{title}</div>
          </div>

          <div className={styles.footer}></div>
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
