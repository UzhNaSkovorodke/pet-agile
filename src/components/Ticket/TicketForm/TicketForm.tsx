import * as React from 'react';

import CustomInput from '../../../ui/input/CustomInput/CustomInput';
import {ITicket} from '../Ticket';

import styles from './TicketForm.module.scss';

interface ITicketFormProps {
  ticketObject: ITicket;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  description: string;
  titlePlaceholder?: string;
  descriptionPlaceholder?: string;
}

const TicketForm: React.FunctionComponent<ITicketFormProps> = ({
  ticketObject,
  title,
  setTitle,
  description,
  setDescription,
  titlePlaceholder,
  descriptionPlaceholder
}) => {
  React.useEffect(() => {
    setTitle(ticketObject.title);
    setDescription(ticketObject.description);
  }, []);

  return (
    <form className={styles.form}>
      <div className={styles.title}>
        <CustomInput
          placeholder={titlePlaceholder ? titlePlaceholder : 'Название задачи'}
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
      </div>

      <textarea
        className={styles.description}
        placeholder={descriptionPlaceholder ? descriptionPlaceholder : 'Описание задачи'}
        defaultValue={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
      />
    </form>
  );
};

export default TicketForm;
