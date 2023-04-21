import axios from 'axios';
import React, {useEffect, useMemo, useState} from 'react';

import url from '../API/api';
import Board from '../components/Board/Board';
import Search from '../components/Search/Search';

import styles from './Kanban.module.scss';

interface IKanbanProps {}

const Kanban: React.FunctionComponent<IKanbanProps> = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tickets, setTickets] = useState([]);

  const [filter, setFilter] = useState('');
  const [isModalActive, setIsModalActive] = useState(true);

  const searchFunc = function (value: any) {
    setFilter(value);
  };

  const searchedPost = useMemo(() => {
    if (filter) {
      return [...tickets].filter((element: any) => element.title.toLowerCase().includes(filter.toLowerCase()));
    } else {
      return tickets;
    }
  }, [filter, tickets]);

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
        <Search filter={filter} searchFunc={searchFunc} />

        <div className={styles.boardWrapper}>
          <Board board={{boardTitle: 'Надо сделать', tickets: searchedPost, id: 1, title: 'Нужно сделать'}} />
          <Board board={{boardTitle: 'Надо сделать', tickets: searchedPost, id: 1, title: 'Нужно сделать'}} />
        </div>
      </div>
    );
  }
};

export default Kanban;
