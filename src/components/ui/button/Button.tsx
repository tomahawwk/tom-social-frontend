import {InputHTMLAttributes} from 'react';
import {Loader} from '@/components/ui/Loader';
import styles from './styles.module.scss';

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = ({isLoading, children}: IButton) => {
  return (
    <button className={styles.button}>
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
