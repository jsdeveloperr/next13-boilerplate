import styles from './Spinner.module.scss';

const Spinner = ({ variant }: { variant?: string }) => (
  <div className={variant === 'outlined' ? styles.loader__outlined : styles.loader} />
);

export default Spinner;
