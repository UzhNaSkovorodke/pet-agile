import {createContext} from 'react';

import {ITicket} from '../components/Ticket/Ticket';
import {IBoardData} from '../layout/Kanban/Kanban';

export interface ITicketContext {
  tickets: ITicket[];
  setTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  boards: IBoardData[];
  setBoards: React.Dispatch<React.SetStateAction<IBoardData[]>>;
}

const TicketContext = createContext<ITicketContext>({
  tickets: [],
  setTickets: () => {},
  isModalActive: false,
  setIsModalActive: () => {},
  boards: [],
  setBoards: () => {}
});
export default TicketContext;
