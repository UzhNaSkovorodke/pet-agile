import * as React from 'react';

import ITicket from '../../../store/interface/ITicket';
import KanbanTicket from '../KanbanTicket/KanbanTicket';

import './KanbanElement.scss';

interface IKanbanElementProps {
  setTaskItem: React.Dispatch<React.SetStateAction<ITicket>>;
  idOfExistsTask: number | null;
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  TicketsState: any;
  typeOfElement: string;
}

const KanbanElement: React.FunctionComponent<IKanbanElementProps> = ({
  idOfExistsTask,
  setTaskItem,
  setIsActiveModal,
  TicketsState,
  typeOfElement
}) => {
  function modalActiveHandler(item?: ITicket, type?: any) {
    if (item) {
      setTaskItem(item);
      idOfExistsTask = item.id;
    } else {
      setTaskItem({
        id: Date.now() + Math.random() * 10,
        title: '',
        description: '',
        type: type
      });
      idOfExistsTask = null;
    }
    setIsActiveModal(true);
  }
  return (
    <div className={`kanban-body__element element_${typeOfElement}`}>
      {TicketsState.ticketsList
        .filter((ticket: any) => ticket.type === `${typeOfElement}`)
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
