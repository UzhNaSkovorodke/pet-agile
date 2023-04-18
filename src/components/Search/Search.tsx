import React from 'react';

import MyInput from '../../ui/input/MyInput';

import styles from './Search.module.scss';

interface ISearchProps {
  filter: any;
  searchFunc: any;
}

const Search: React.FunctionComponent<ISearchProps> = ({filter, searchFunc}) => {
  return (
    <div className={styles.search}>
      <MyInput value={filter} onChange={(e: any) => searchFunc(e.target.value)} />
    </div>
  );
};

export default Search;
