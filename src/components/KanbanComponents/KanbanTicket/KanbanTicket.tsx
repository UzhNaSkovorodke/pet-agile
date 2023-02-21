import * as React from 'react';
import {useDispatch} from 'react-redux';

import ITicket from '../../../store/interface/ITicket';
import {addTicket, deleteTicket} from '../../../store/slices/TicketListSlice';

import './KanbanTicket.scss';

interface IKanbanTicketProps {
  modalActiveHandler: (item: ITicket) => void;
  children?: JSX.Element | JSX.Element[] | string | string[];
  item: ITicket;
}

let currentTask: ITicket = {id: 0, title: '', description: '', type: ''};

const KanbanTicket: React.FunctionComponent<IKanbanTicketProps> = ({children, modalActiveHandler, item}) => {
  const dispatch = useDispatch();

  function dragStartHandler() {
    currentTask = {...item};
  }

  function dragLeaveHandler(e: any) {
    e.target.style.background = '';
  }

  function dragOverHandler(e: any) {
    e.preventDefault();
    e.target.style.background = 'rgb(233, 233, 233)';
  }

  function dropHandler(e: React.FormEvent<HTMLDivElement>) {
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
      onDragStart={e => dragStartHandler()}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragOver={e => dragOverHandler(e)}
      onDrop={e => dropHandler(e)}
    >
      {children}
    </div>
  );
};

export default KanbanTicket;
