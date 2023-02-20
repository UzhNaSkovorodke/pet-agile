import * as React from 'react';
import {useDispatch} from 'react-redux';

import ITicket from '../../../store/interface/ITicket';
import {setHoldTask, setIdHoldTask} from '../../../store/slices/HoldTaskSlice';
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

  return (
    <div className={`kanban-body__element element_${typeOfElement}`} draggable={true}>
      {TicketsState.ticketsList
        .filter((ticket: ITicket) => ticket.type === `${typeOfElement}`)
        .map((item: ITicket) => (
          <KanbanTicket modalActiveHandler={modalActiveHandler} item={item} key={Date.now() + Math.random() * 10}>
            <div className="ticket__title">{item.title}</div>
            <div className="ticket__description">{item.description}</div>
          </KanbanTicket>
        ))}

      <button onClick={() => modalActiveHandler(undefined, `${typeOfElement}`)} className="button_add">
        +
      </button>
    </div>
  );
};

export default KanbanElement;
