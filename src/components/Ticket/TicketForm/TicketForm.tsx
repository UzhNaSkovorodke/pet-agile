import * as React from 'react';

import CustomInput from '../../../UiKit/input/CustomInput/CustomInput';
import {ITicket} from '../Ticket';

import styles from './TicketForm.module.scss';

interface ITicketFormProps {
  ticketObject: ITicket;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  description: string;
}

const TicketForm: React.FunctionComponent<ITicketFormProps> = ({ticketObject, title, setTitle, description, setDescription}) => {
  React.useEffect(() => {
    setTitle(ticketObject.title);
    setDescription(ticketObject.description);
  }, []);

  return (
    <form className={styles.form}>
      <div className={styles.title}>
        <CustomInput value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
      </div>

      <textarea
        className={styles.description}
        defaultValue={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
      />
    </form>
  );
};

export default TicketForm;
