import React from 'react';

import MyInput from '../../UiKit/input/MyInput';

import styles from './Search.module.scss';

interface ISearchProps {
  filter: string;
  searchFunc: any;
}

const Search: React.FunctionComponent<ISearchProps> = ({filter, searchFunc}) => {
  return (
    <div className={styles.search}>
      <MyInput value={filter} onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchFunc(e.target.value)} />
    </div>
  );
};

export default Search;
