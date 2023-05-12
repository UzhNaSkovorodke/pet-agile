import {createContext} from 'react';

import {ITicket} from '../components/Ticket/Ticket';

export interface ITicketContext {
  tickets: ITicket[];
  setTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const TicketContext: any = createContext<ITicketContext>({
  tickets: [],
  setTickets: () => {},
  isModalActive: false,
  setIsModalActive: () => {}
});
export default TicketContext;
