import axios from 'axios';
import React, {useEffect, useState} from 'react';

import url from '../API/api';
import BoardSample from '../components/Board/BoardSample';

import styles from './Kanban.module.scss';

interface IKanbanProps {}

const Kanban: React.FunctionComponent<IKanbanProps> = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tickets, setTickets] = useState([]);

  async function makeFetch() {
    try {
      setIsLoading(true);
      const response: any = await axios.get(url, {params: {_limit: 6}});
      setTickets(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    makeFetch();
  }, []);

  if (isError) {
    return <div className={styles.error}>Error, что-то не прогрузилось</div>;
  } else if (isLoading) {
    return <div className={styles.loading}>Данные прогружаются</div>;
  } else {
    return (
      <div className={styles.kanban}>
        <BoardSample board={{boardColor: 'red', tickets: tickets, id: 1}} />
      </div>
    );
  }
};

export default Kanban;
