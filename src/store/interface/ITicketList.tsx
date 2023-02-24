import ITicket from './ITicket';

export default interface ITicketList {
  id: number;
  title: string;
  items: ITicket[];
}
