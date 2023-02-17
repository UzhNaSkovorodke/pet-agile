import {useDispatch} from 'react-redux';

import {addTicket} from '../../../store/TicketsSlice';
import ITicket from '../../../store/interface/ITicket';
import KanbanTicket from '../KanbanTicket/KanbanTicket';

import './KanbanBody.scss';

interface IKanbanBodyProps {
  setIsActiveModal: any;
  TicketsState: {
    name: string;
    ticketsList: Array<ITicket>;
  };
}

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({TicketsState, setIsActiveModal}) => {
  const dispatch = useDispatch();

  const AddTicketHandler = function (type: string) {
    const ticket: ITicket = {
      id: Date.now(),
      title: 'Новый таск',
      description: 'Новое описание',
      type: type
    };

    dispatch(addTicket(ticket));
  };

  return (
    <div className="kanban-body">
      <div className="kanban-body__element element_backlog">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'backlog')
          .map((item: ITicket) => (
            <KanbanTicket setIsActiveModal={setIsActiveModal} item={item} key={item.id}>
              <div className="ticket__title">{item.title}</div>
              <div className="ticket__description">{item.description}</div>
            </KanbanTicket>
          ))}

        <button onClick={() => AddTicketHandler('backlog')} className="button_add">
          +
        </button>
      </div>

      <div className="kanban-body__element element_process">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'process')
          .map((item: ITicket) => (
            <KanbanTicket setIsActiveModal={setIsActiveModal} item={item} key={item.id}>
              <div className="ticket__title">{item.title}</div>
              <div className="ticket__description">{item.description}</div>
            </KanbanTicket>
          ))}

        <button onClick={() => AddTicketHandler('process')} className="button_add">
          +
        </button>
      </div>

      <div className="kanban-body__element element_done">
        {TicketsState.ticketsList
          .filter(ticket => ticket.type === 'done')
          .map((item: ITicket) => (
            <KanbanTicket setIsActiveModal={setIsActiveModal} item={item} key={item.id}>
              <div className="ticket__title">{item.title}</div>
              <div className="ticket__description">{item.description}</div>
            </KanbanTicket>
          ))}

        <button onClick={() => AddTicketHandler('done')} className="button_add">
          <div>+</div>
        </button>
      </div>
    </div>
  );
};

export default KanbanBody;
