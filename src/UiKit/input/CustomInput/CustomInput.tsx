import styles from './CustomInput.module.scss';

interface ICustomInput {
  value?: string;
  onChange?: any;
  placeholder?: string;
}

function CustomInput(props: ICustomInput) {
  return <input className={styles.input} {...props} />;
}

export default CustomInput;
