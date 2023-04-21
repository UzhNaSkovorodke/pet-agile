import * as React from 'react';

import styles from './TicketDate.module.scss';

interface ITicketDateProps {}

const TicketDate: React.FunctionComponent<ITicketDateProps> = props => {
  return <div className={styles.date}>{new Date().getFullYear()}</div>;
};

export default TicketDate;
