import {useDispatch} from 'react-redux';

import {addBacklogTicket, addDoneTicket, addProcessTicket} from '../../store/TicketsSlice';

import './KanbanBody.scss';

interface ITicket {
  id: number;
  text: string;
}

interface IKanbanBodyProps {
  setIsActiveModal: any;
  TicketsState: {
    name: string;
    backlogTickets: Array<ITicket>;
    processTickets: Array<ITicket>;
    doneTickets: Array<ITicket>;
  };
}

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({TicketsState, setIsActiveModal}) => {
  const dispatch = useDispatch();

  const AddTicketHandler = function (type: string) {
    const ticket = {
      id: Date.now(),
      text: 'Новый таск'
    };

    switch (type) {
      default:
      case 'backlog':
        dispatch(addBacklogTicket(ticket));
        break;
      case 'process':
        dispatch(addProcessTicket(ticket));
        break;
      case 'done':
        dispatch(addDoneTicket(ticket));
        break;
    }
  };

  return (
    <div className="kanban-body">
      <div className="kanban-body__element element_backlog">
        {TicketsState.backlogTickets.map((item: any) => (
          <div className="ticket" onClick={() => setIsActiveModal(true)} key={item.id}>
            {item.text}
          </div>
        ))}
        <button onClick={() => AddTicketHandler('backlog')} className="ticket ticket_add">
          +
        </button>
      </div>
      <div className="kanban-body__element element_progress">
        {TicketsState.processTickets.map((item: any) => (
          <div className="ticket" onClick={() => setIsActiveModal(true)} key={item.id}>
            {item.text}
          </div>
        ))}
        <button onClick={() => AddTicketHandler('process')} className="ticket ticket_add">
          +
        </button>
      </div>
      <div className="kanban-body__element element_done">
        {TicketsState.doneTickets.map((item: any) => (
          <div className="ticket" onClick={() => setIsActiveModal(true)} key={item.id}>
            {item.text}
          </div>
        ))}
        <button onClick={() => AddTicketHandler('done')} className="ticket ticket_add">
          +
        </button>
      </div>
    </div>
  );
};

export default KanbanBody;
