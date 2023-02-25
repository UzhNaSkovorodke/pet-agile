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

const KanbanElement: React.FunctionComponent<IKanbanElementProps> = ({setIsActiveModal, TicketsState, typeOfElement}) => {
  const dispatch = useDispatch();
  function idCreator() {
    return Date.now() + Math.random() * 2;
  }

  function modalActiveHandler(item?: ITicket, type?: any) {
    if (item) {
      dispatch(setHoldTask(item));
      dispatch(setIdHoldTask(item.id));
    } else {
      dispatch(setHoldTask({id: idCreator(), title: '', description: '', type: type, tags: []}));
    }
    setIsActiveModal(true);
  }

  return (
    <div className={`kanban-body__element element_${typeOfElement}`}>
      <div className="body__element_title">
        <p className="__element_title">
          {typeOfElement === 'backlog' ? 'Сделать' : typeOfElement === 'process' ? 'В процессе' : 'Сделано'}
        </p>
      </div>
      <div className="elementsWrapper">
        {TicketsState.ticketsList
          .filter((ticket: ITicket) => ticket.type === `${typeOfElement}`)
          .map((item: ITicket) => (
            <KanbanTicket modalActiveHandler={modalActiveHandler} item={item} key={idCreator()} />
          ))}
        <div className="btn_wrapper">
          <button onClick={() => modalActiveHandler(undefined, `${typeOfElement}`)} className="button_add">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanElement;
