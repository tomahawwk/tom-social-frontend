'use client';

import {AtSign, KeyRound} from 'lucide-react';
import Field from '@/components/ui/Field';
import Button from '@/components/ui/button/Button';
import styles from './styles.module.scss';
import {IAuthFormState} from './auth.types';
import {SubmitHandler, useForm} from 'react-hook-form';
import {signIn} from 'next-auth/react';
import {getRandomFullName} from '@/utils/get-random-full-name.util';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import toast from 'react-hot-toast'

interface IAuth {
  type?: 'login' | 'register';
}

const Auth = ({type}: IAuth) => {
  const {register, handleSubmit} = useForm<IAuthFormState>({
    mode: 'onChange',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {push} = useRouter();
  const onSubmit: SubmitHandler<IAuthFormState> = async data => {
    setIsLoading(true);
    const response = await signIn(
      'credentials',
      type === 'login'
        ? {
            redirect: false,
            ...data,
          }
        : {
            redirect: false,
            username: getRandomFullName(),
            ...data,
          },
    );

    if (response?.error) {
      toast.error(response.error)
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <p>{type}</p>
      <Field
        {...register('email', {
          required: true,
        })}
        placeholder="Enter email"
        type="email"
        Icon={AtSign}
        className="mb-8"
      />
      <Field
        {...register('password', {
          required: true,
          minLength: {
            value: 6,
            message: 'Min length 6 symbols!',
          },
        })}
        placeholder="Enter password"
        type="password"
        Icon={KeyRound}
        className="mb-12"
      />
      <Button type="submit" isLoading={isLoading} disabled={isLoading}>{type}</Button>
    </form>
  );
};

export default Auth;
