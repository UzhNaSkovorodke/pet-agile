import React from 'react';

import styles from './MyInput.module.scss';

interface IMyInput {
  value?: any;
  onChange?: any;
  placeholder?: string;
}

function MyInput(props: IMyInput) {
  return <input className={styles.input} {...props} />;
}

export default MyInput;
