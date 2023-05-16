import React, {useContext, useState} from 'react';

import {url} from '../../API/api';
import cross from '../../assets/icon/cross.png';
import TicketContext, {ITicketContext} from '../../context/TicketContext';
import MainPopup from '../../ui/Popup/MainPopup/MainPopup';
import CustomCheck from '../../ui/input/CustomCheck/CustomCheck';
import {IBoard} from '../Board/Board';

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
  board: IBoard;
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
    const task = {...ticketObject};
    task.completed = !isDidTask;
    await fetch(`${url}/task/${ticketObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    });
  }

  async function updateTextTask() {
    const task = {...ticketObject};
    task.title = title;
    task.description = description;
    await fetch(`${url}/task/${ticketObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    });
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

    await fetch(`${url}/task/${ticketObject.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });

    let boards = [...taskContext.boards];
    let currentBoard = {};
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].id === board.id) {
        boards[i].id_tasks = boards[i].id_tasks.filter((element: number) => element !== ticketObject.id);
        currentBoard = boards[i];
      }
    }

    await fetch(`${url}/board/${board.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(currentBoard)
    });

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
