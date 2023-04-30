import React from 'react';

import styles from './Navigate.module.scss';

interface INavigateProps {}

const Navigate: React.FunctionComponent<INavigateProps> = props => {
  return (
    <nav className={styles.navigate}>
      <a href="/">MAIN</a>
      <a href="/new">NEW</a>
    </nav>
  );
};

export default Navigate;
