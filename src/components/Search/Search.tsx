import MyInput from '../../ui/input/MyInput';
import styles from './Search.module.scss';
import React from 'react';

interface ISearchProps {
    filter: any;
    setFilter: any;
}

const Search: React.FunctionComponent<ISearchProps> = ({filter, setFilter }) => {
 <div className={styles.search}>
    <MyInput 
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..." 
        className={styles.search__inp} type="text" name="" id="" />
  </div>
}

export default Search