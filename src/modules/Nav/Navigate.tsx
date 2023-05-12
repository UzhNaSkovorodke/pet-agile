import styles from './Navigate.module.scss';

type Props = {};

export default function Navigate({}: Props) {
  return (
    <nav className={styles.navigate}>
      <a href="/">MAIN</a>
      <a href="/new">NEW</a>
    </nav>
  );
}
