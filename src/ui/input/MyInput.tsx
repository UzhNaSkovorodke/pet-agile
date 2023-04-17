import React from 'react';

import styles from './MyInput.module.css';

interface IMyInput {}

const MyInput: React.FunctionComponent<IMyInput> = props => {
  return <input className={styles.MyInput} {...props} />;
};

export default MyInput;
