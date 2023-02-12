import {useDispatch} from 'react-redux';

import {addBacklogTicket, addDoneTicket, addProcessTicket} from '../../store/TicketsSlice';

import './KanbanBody.scss';

interface ITicket {
  id: number;
  text: string;
}

interface IKanbanBodyProps {
  TicketsState: {
    name: string;
    backlogTickets: Array<ITicket>;
    processTickets: Array<ITicket>;
    doneTickets: Array<ITicket>;
  };
}

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({TicketsState}) => {
  const dispatch = useDispatch();

  const AddTicketHandler = function (type: string) {
    const ticket = {
      id: Date.now(),
      text: 'Cliccccck'
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
    <div className="kanban__body">
      <div className="kanban__body__backlog kanban__body__element">
        {TicketsState.backlogTickets.map((item: any) => (
          <div className="ticket" key={item.id}>
            {item.text}
          </div>
        ))}
        <button onClick={() => AddTicketHandler('backlog')} className="ticket ticket_add">
          +
        </button>
      </div>
      <div className="kanban__body__progress kanban__body__element">
        {TicketsState.processTickets.map((item: any) => (
          <div className="ticket" key={item.id}>
            {item.text}
          </div>
        ))}
        <button onClick={() => AddTicketHandler('process')} className="ticket ticket_add">
          +
        </button>
      </div>
      <div className="kanban__body__done kanban__body__element">
        {TicketsState.doneTickets.map((item: any) => (
          <div className="ticket" key={item.id}>
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
