import * as React from 'react';
import {useDispatch} from 'react-redux';

import ITicket from '../../../store/interface/ITicket';
import {setHoldTask, setIdHoldTask} from '../../../store/slices/HoldTaskSlice';
import KanbanTicket from '../KanbanTicket/KanbanTicket';

import './KanbanElement.scss';

interface IKanbanElementProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  ticketList: ITicket[];
  typeOfElement: string;
}

const KanbanElement: React.FunctionComponent<IKanbanElementProps> = ({setIsActiveModal, typeOfElement, ticketList}) => {
  const dispatch = useDispatch();

  function idCreator() {
    return Date.now() + Math.random() * 2;
  }

  function modalActiveHandler(item?: ITicket, type?: any) {
    if (item) {
      dispatch(setHoldTask(item));
      dispatch(setIdHoldTask(item.id));
    } else {
      dispatch(setHoldTask({id: idCreator(), title: '', description: '', type: type}));
    }
    setIsActiveModal(true);
  }

  return (
    <div className={`kanban-body__element element_${typeOfElement}`}>
      {ticketList.map((item: any) => (
        <KanbanTicket modalActiveHandler={modalActiveHandler} item={item} key={idCreator()}></KanbanTicket>
      ))}

      <div className="btn_wrapper">
        <button onClick={() => modalActiveHandler(undefined, `${typeOfElement}`)} className="button_add">
          +
        </button>
      </div>
    </div>
  );
};

export default KanbanElement;
