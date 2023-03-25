import * as React from 'react';
import {useDispatch} from 'react-redux';

import ITicket from '../../../store/interface/ITicket';
import {setHoldTask, setIdHoldTask} from '../../../store/slices/HoldTaskSlice';
import KanbanTicket from '../KanbanTicket/KanbanTicket';

import './KanbanElement.scss';
import KanbanElementTitle from './KanbanElementTitle';

interface IKanbanElementProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  tickets: ITicket[];
  typeOfElement: string;
}

const KanbanElement: React.FunctionComponent<IKanbanElementProps> = ({setIsActiveModal, tickets, typeOfElement}) => {
  const dispatch = useDispatch();
  function holdTaskHelper(item?: ITicket, type?: any) {
    if (item) {
      dispatch(setHoldTask(item));
      dispatch(setIdHoldTask(item.id));
    } else {
      dispatch(setHoldTask({id: Date.now() * Math.random(), title: '', description: '', type: type, tags: []}));
    }
  }

  function modalActiveHandler(item?: ITicket, type?: any) {
    //holdTaskHelper(item, type);
    setIsActiveModal(true);
  }

  return (
    <div className={`kanban-body__element element_${typeOfElement}`}>
      <KanbanElementTitle typeOfElement={typeOfElement} />

      <div className="elementsWrapper">
        {tickets
          .filter((ticket: ITicket) => ticket.type === `${typeOfElement}`)
          .map((item: ITicket) => (
            <KanbanTicket modalActiveHandler={modalActiveHandler} item={item} key={Date.now() * Math.random()} />
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
