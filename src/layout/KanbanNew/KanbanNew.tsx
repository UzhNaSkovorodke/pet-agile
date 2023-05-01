import axios from 'axios';
import React, {useEffect, useMemo, useState} from 'react';

import {myUrl} from '../../API/api';
import Board from '../../components/Board/Board';
import Navigate from '../../components/Nav/Navigate';
import Search from '../../components/Search/Search';
import {iTicket} from '../../components/Ticket/Ticket';

import styles from './Kanban.module.scss';

interface IKanbanNewProps {}

const KanbanNew: React.FunctionComponent<IKanbanNewProps> = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tickets, setTickets] = useState([]);

  const [filter, setFilter] = useState('');

  const searchFunc = function (value: string) {
    setFilter(value);
  };

  const searchedPost = useMemo(() => {
    if (filter) {
      return [...tickets].filter((element: iTicket) => element.title.toLowerCase().includes(filter.toLowerCase()));
    } else {
      return tickets;
    }
  }, [filter, tickets]);

  async function makeFetch() {
    try {
      setIsLoading(true);
      const response: any = await axios.get(myUrl, {params: {_limit: 6}});

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
        <Navigate />
        <Search filter={filter} searchFunc={searchFunc} />

        <div className={styles.boardWrapper}>
          <Board board={{boardTitle: 'Надо сделать', tickets: searchedPost, id: 1, title: 'Нужно сделать'}} />
        </div>
      </div>
    );
  }
};

export default KanbanNew;
