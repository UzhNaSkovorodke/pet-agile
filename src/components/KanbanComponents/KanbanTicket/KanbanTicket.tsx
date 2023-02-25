import * as React from 'react';
import {useDispatch} from 'react-redux';

import icon1 from '../../../assets/icon/user1.png';
import ITicket from '../../../store/interface/ITicket';
import {addTicket, deleteTicket} from '../../../store/slices/TicketListSlice';

import './KanbanTicket.scss';

interface IKanbanTicketProps {
  modalActiveHandler: (item: ITicket) => void;
  item: ITicket;
}
let currentTask: ITicket = {id: 0, title: '', description: '', type: ''};

const KanbanTicket: React.FunctionComponent<IKanbanTicketProps> = ({modalActiveHandler, item}) => {
  const dispatch = useDispatch();

  function dragStartHandler() {
    currentTask = {...item};
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
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
      onDragStart={dragStartHandler}
      onDragOver={e => dragOverHandler(e)}
      onDrop={e => dropHandler(e)}
    >
      <div className="ticket">
        <h2 className="ticket__title">{item.title}</h2>
        <p className="ticket__description">{item.description}</p>
        <div className="ticket__avatarWrapper">
          <img draggable={false} src={icon1} className="ticket__avatar ticket__" />
          <p>Кирилл Дженкинс</p>
        </div>
      </div>
    </div>
  );
};

export default KanbanTicket;
