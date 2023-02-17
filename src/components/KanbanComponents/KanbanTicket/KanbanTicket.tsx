import * as React from 'react';
import {useDispatch} from 'react-redux';

import {addTicket, deleteTicket} from '../../../store/TicketsSlice';
import ITicket from '../../../store/interface/ITicket';

import styles from './KanbanTicket.module.scss';
import './KanbanTicket.scss';

interface IKanbanTicketProps {
  setIsActiveModal: any;
  children?: JSX.Element | JSX.Element[] | string | string[];
  item: ITicket;
}

let currentTask: ITicket = {id: 0, title: '', description: '', type: ''};

const KanbanTicket: React.FunctionComponent<IKanbanTicketProps> = ({setIsActiveModal, children, item}) => {
  const dispatch = useDispatch();

  function dragStartHandler(e: React.FormEvent<HTMLDivElement>, item: ITicket) {
    currentTask = {...item};
  }

  function dragEndHandler(e: React.FormEvent<HTMLDivElement>) {}

  function dragOverHandler(e: React.FormEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dropHandler(e: React.FormEvent<HTMLDivElement>, item: ITicket) {
    e.preventDefault();
    dispatch(deleteTicket(currentTask.id));
    currentTask.type = item.type;
    dispatch(addTicket(currentTask));
  }

  return (
    <div
      className="ticketWrapper"
      draggable={true}
      onClick={() => setIsActiveModal(true)}
      onDragStart={e => dragStartHandler(e, item)}
      onDragLeave={e => dragEndHandler(e)}
      onDragEnd={e => dragEndHandler(e)}
      onDragOver={e => dragOverHandler(e)}
      onDrop={e => dropHandler(e, item)}
    >
      <div className={styles.ticket}>{children}</div>
    </div>
  );
};

export default KanbanTicket;
