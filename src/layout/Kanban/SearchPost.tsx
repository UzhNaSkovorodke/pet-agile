import {useContext, useMemo} from 'react';

import {ITicket} from '../../components/Ticket/Ticket';
import TicketContext, {ITicketContext} from '../../context/TicketContext';

type Props = {
  filter: string;
};

const SearchPost = ({filter}: Props) => {
  const ticketsState = useContext<ITicketContext>(TicketContext);

  useMemo(() => {
    //сделать так чтобы не ререндерилось если таски после введение нового символа не поменялись (использовать новый state?)
    if (filter) {
      return [...ticketsState.tickets].filter((element: ITicket) => element.title.toLowerCase().includes(filter.toLowerCase())).sort();
    } else {
      return ticketsState.tickets;
    }
  }, [filter, ticketsState.tickets]);
};
export default SearchPost;
