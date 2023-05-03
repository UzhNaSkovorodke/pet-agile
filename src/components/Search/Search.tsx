import React from 'react';

import CustomInput from '../../UiKit/input/CustomInput/CustomInput';

import styles from './Search.module.scss';

interface ISearchProps {
  filter: string;
  searchFunc: any;
}
const Search: React.FunctionComponent<ISearchProps> = ({filter, searchFunc}) => {
  return (
    <div className={styles.search}>
      <CustomInput value={filter} onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchFunc(e.target.value)} />
    </div>
  );
};

export default Search;
