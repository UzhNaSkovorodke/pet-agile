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

const TicketForm: React.FunctionComponent<ITicketFormProps> = ({ticketObject, title, setTitle, description, setDescription}) => {
  React.useEffect(() => {
    setTitle(ticketObject.title);
    setDescription(ticketObject.description);
  }, []);

  return (
    <form className={styles.form}>
      <label>
        <div className={styles.input_title}>Заголовок задачи</div>

        <div className={styles.title}>
          <CustomInput value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
        </div>
      </label>

      {/* <label>
        <div className={styles.input_title}>Наименование доски</div>
        <div className={styles.type}>
          <CustomInput value={typeBoard} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTypeBoard(e.target.value)} />
        </div>
      </label> */}

      <label>
        <div className={styles.input_title}>Описание задачи</div>
        <textarea
          className={styles.description}
          defaultValue={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
      </label>
    </form>
  );
};

export default TicketForm;
