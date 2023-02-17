import {useSelector} from 'react-redux';

import ITicket from '../../../store/interface/ITicket';
import {RootState} from '../../../store/store';
import KanbanTicket from '../KanbanTicket/KanbanTicket';

import './KanbanBody.scss';

interface IKanbanBodyProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIdOfExistsTask: React.Dispatch<React.SetStateAction<number | null>>;
  setTaskItem: React.Dispatch<React.SetStateAction<ITicket>>;
}

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({setTaskItem, setIsActiveModal, setIdOfExistsTask}) => {
  function modalActiveHandler(item?: ITicket, type?: any) {
    if (item) {
      setTaskItem(item);
      setIdOfExistsTask(item.id);
    } else {
      setTaskItem({
        id: Date.now() + Math.random() * 10,
        title: '',
        description: '',
        type: type
      });
      setIdOfExistsTask(null);
    }
    setIsActiveModal(true);
  }

  const TicketsState = useSelector((state: RootState) => state.tickets);
  return (
    //комм сделать нормальный компонент для элемента body
    <div className="kanban-body">
      <div className="kanban-body__element element_backlog">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'backlog')
          .map((item: ITicket) => (
            <KanbanTicket modalActiveHandler={modalActiveHandler} item={item} key={Date.now() + Math.random() * 10}>
              <div className="ticket__title">{item.title}</div>
              <div className="ticket__description">{item.description}</div>
            </KanbanTicket>
          ))}

        <button onClick={() => modalActiveHandler(undefined, 'backlog')} className="button_add">
          +
        </button>
      </div>

      <div className="kanban-body__element element_process">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'process')
          .map((item: ITicket) => (
            <KanbanTicket modalActiveHandler={modalActiveHandler} item={item} key={Date.now() + Math.random() * 10}>
              <div className="ticket__title">{item.title}</div>
              <div className="ticket__description">{item.description}</div>
            </KanbanTicket>
          ))}

        <button onClick={() => modalActiveHandler(undefined, 'process')} className="button_add">
          +
        </button>
      </div>

      <div className="kanban-body__element element_done">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'done')
          .map((item: ITicket) => (
            <KanbanTicket modalActiveHandler={modalActiveHandler} item={item} key={Date.now() + Math.random() * 10}>
              <div className="ticket__title">{item.title}</div>
              <div className="ticket__description">{item.description}</div>
            </KanbanTicket>
          ))}

        <button onClick={() => modalActiveHandler(undefined, 'done')} className="button_add">
          +
        </button>
      </div>
    </div>
  );
};

export default KanbanBody;
