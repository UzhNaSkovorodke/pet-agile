import {createContext} from 'react';

import {ITicket} from '../../components/Ticket/Ticket';

export interface ITicketContext {
  tickets: ITicket[];
  setTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
}

const TicketContext: any = createContext<ITicketContext>({
  tickets: [],
  setTickets: () => {}
});
export default TicketContext;
