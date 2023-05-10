import {useEffect, useState} from 'react';

import styles from './CustomCheck.module.scss';

interface ICustomCheck {
  onChange?: any;
  isCheckedAlready: boolean;
}

function CustomCheck({onChange, isCheckedAlready, ...props}: ICustomCheck) {
  const [checked, setChecked] = useState<boolean>(false);
  useEffect(() => {
    setChecked(isCheckedAlready);
  }, []);

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  return <input className={styles.check} checked={checked} onChange={() => setChecked(prev => !prev)} type="checkbox" {...props} />;
}

export default CustomCheck;
