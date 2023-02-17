import {useDispatch} from 'react-redux';

import {addTicket} from '../../store/TicketsSlice';
import ITicket from '../../store/interface/ITicket';

import KanbanTicket from './KanbanTicket';

interface IKanbanBodyProps {
  setIsActiveModal: any;
  TicketsState: {
    name: string;
    ticketsList: Array<ITicket>;
  };
}
export type TItem = {
  id: number;
  text: string;
  type: string;
};

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({TicketsState, setIsActiveModal}) => {
  const dispatch = useDispatch();

  const AddTicketHandler = function (type: string) {
    const ticket = {
      id: Date.now(),
      text: 'Новый таск',
      type: type
    };
    dispatch(addTicket(ticket));
  };

  return (
    <div className="kanban-body">
      <div className="kanban-body__element element_backlog">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'backlog')
          .map((item: TItem) => (
            <KanbanTicket setIsActiveModal={setIsActiveModal} item={item} key={item.id}>
              {item.text}
            </KanbanTicket>
          ))}

        <button onClick={() => AddTicketHandler('backlog')} className="ticket ticket_add">
          +
        </button>
      </div>

      <div className="kanban-body__element element_process">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'process')
          .map((item: TItem) => (
            <KanbanTicket setIsActiveModal={setIsActiveModal} item={item} key={item.id}>
              {item.text}
            </KanbanTicket>
          ))}

        <button onClick={() => AddTicketHandler('process')} className="ticket ticket_add">
          +
        </button>
      </div>

      <div className="kanban-body__element element_done">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'done')
          .map((item: TItem) => (
            <KanbanTicket setIsActiveModal={setIsActiveModal} item={item} key={item.id}>
              {item.text}
            </KanbanTicket>
          ))}

        <button onClick={() => AddTicketHandler('done')} className="ticket ticket_add">
          +
        </button>
      </div>
    </div>
  );
};

export default KanbanBody;
