import * as React from 'react';
import {useDispatch} from 'react-redux';

import {addTicket, deleteTicket} from '../../../store/TicketsSlice';
import ITicket from '../../../store/interface/ITicket';

import styles from './KanbanTicket.module.scss';
import './KanbanTicket.scss';

interface IKanbanTicketProps {
  modalActiveHandler: (item: ITicket) => void;
  children?: JSX.Element | JSX.Element[] | string | string[];
  item: ITicket;
}

let currentTask: ITicket = {id: 0, title: '', description: '', type: ''};

const KanbanTicket: React.FunctionComponent<IKanbanTicketProps> = ({children, item, modalActiveHandler}) => {
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
      onClick={() => modalActiveHandler(item)}
      onDragStart={e => dragStartHandler(e, item)}
      onDragLeave={e => dragEndHandler(e)}
      onDragEnd={e => dragEndHandler(e)}
      onDragOver={e => dragOverHandler(e)}
      onDrop={e => dropHandler(e, item)}
    >
      {children}
    </div>
  );
};

export default KanbanTicket;