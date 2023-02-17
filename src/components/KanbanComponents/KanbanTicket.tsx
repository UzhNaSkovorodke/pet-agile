import * as React from 'react';
import {useDispatch} from 'react-redux';

import {addTicket, deleteTicket} from '../../store/TicketsSlice';

import {TItem} from './KanbanBody';
import './KanbanBody.scss';

interface IKanbanTicketProps {
  setIsActiveModal: any;
  children?: JSX.Element | JSX.Element[] | string | string[];
  item: TItem;
}

let currentTask: TItem = {id: 0, text: '', type: ''};

const KanbanTicket: React.FunctionComponent<IKanbanTicketProps> = ({setIsActiveModal, children, item}) => {
  const dispatch = useDispatch();

  function dragStartHandler(e: React.FormEvent<HTMLDivElement>, item: TItem) {
    currentTask = {...item};
  }

  function dragEndHandler(e: React.FormEvent<HTMLDivElement>) {}

  function dragOverHandler(e: React.FormEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dropHandler(e: React.FormEvent<HTMLDivElement>, item: TItem) {
    e.preventDefault();
    dispatch(deleteTicket(currentTask.id));
    currentTask.type = item.type;
    dispatch(addTicket(currentTask));
  }

  return (
    <div
      className="ticket"
      draggable={true}
      onClick={() => setIsActiveModal(true)}
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
