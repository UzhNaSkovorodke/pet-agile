import styles from './CustomCheck.module.scss';

interface ICustomCheck {
  onChange: () => void;
  value: boolean;
}

function CustomCheck({onChange, value, ...props}: ICustomCheck) {
  return <input className={styles.check} checked={value} onChange={() => onChange()} type="checkbox" {...props} />;
}

export default CustomCheck;
