import * as React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import icon1 from '../../../assets/icon/user1.png';
import ITicket from '../../../store/interface/ITicket';
import {setHoldTask, setIdHoldTask, setIsDragingTask} from '../../../store/slices/HoldTaskSlice';
import {addTicket, deleteTicket} from '../../../store/slices/TicketListSlice';
import {RootState} from '../../../store/store';
import KanbanTicket from '../KanbanTicket/KanbanTicket';

import './KanbanElement.scss';

interface IKanbanElementProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  TicketsState: {name: string; ticketsList: ITicket[]};
  typeOfElement: string;
}

const KanbanElement: React.FunctionComponent<IKanbanElementProps> = ({
  setIsActiveModal,
  TicketsState,
  typeOfElement
}) => {
  const dispatch = useDispatch();

  function modalActiveHandler(item?: ITicket, type?: any) {
    if (item) {
      dispatch(setHoldTask(item));
      dispatch(setIdHoldTask(item.id));
    } else {
      dispatch(setHoldTask({id: Date.now() + Math.random() * 10, title: '', description: '', type: type}));
    }
    setIsActiveModal(true);
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <div
      className={`kanban-body__element element_${typeOfElement}`}
      onDragOver={e => {
        dragOverHandler(e);
      }}
      onDrop={e => {
        dropHandler(e);
      }}
    >
      {TicketsState.ticketsList
        .filter((ticket: ITicket) => ticket.type === `${typeOfElement}`)
        .map((item: ITicket) => (
          <KanbanTicket
            modalActiveHandler={modalActiveHandler}
            item={item}
            key={Date.now() + Math.random() * 10}
            type={typeOfElement}
          >
            <div className="ticket">
              <h2 className=" ticket__title ticket__">{item.title}</h2>
              <p className="ticket__description ticket__">{item.description}</p>

              <div className="ticket__avatarWrapper">
                <img draggable={false} src={icon1} className="ticket__avatar ticket__" />
                <p>Кирилл Дженкинс</p>
              </div>
            </div>
          </KanbanTicket>
        ))}

      <button onClick={() => modalActiveHandler(undefined, `${typeOfElement}`)} className="button_add">
        +
      </button>
    </div>
  );
};

export default KanbanElement;
