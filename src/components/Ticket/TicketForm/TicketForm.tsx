import * as React from 'react';
import {useContext} from 'react';

import TicketContext, {ITicketContext} from '../../../layout/Kanban/TicketContext';
import {ITicket} from '../Ticket';

import styles from './TicketForm.module.scss';

interface ITicketFormProps {
  ticketObject: ITicket;
}

const TicketForm: React.FunctionComponent<ITicketFormProps> = ({ticketObject}) => {
  const ticketsState = useContext<ITicketContext>(TicketContext);
  console.log(ticketsState);

  return (
    <div className="">
      <div className={styles.title}>{ticketObject.title}</div>
      <div className={styles.description}>{ticketObject.description}</div>
    </div>
  );
};

export default TicketForm;
