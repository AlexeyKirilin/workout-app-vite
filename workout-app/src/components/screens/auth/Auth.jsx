import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';

import Layout from '../../layout/Layout';

import styles from './Auth.module.scss';

const Auth = () => {
  const [type, setType] = useState('auth');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Layout heading="sign in" bgImage="/images/auth-bg.png" />
      <div className="wrapper-inner-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.email?.message}
            type="text"
            name="email"
            placeholder="email"
            register={register}
            options={{
              ...register('email', {
                required: 'email is required',
              }),
            }}
          />
          <Field
            error={errors?.password?.message}
            type="text"
            name="password"
            placeholder="password"
            register={register}
            options={{
              ...register('password', {
                required: 'password is required',
              }),
            }}
          />
          <div className={styles.wrapperButtons}>
            <Button clickHandler={() => setType('auth')}>Sign in</Button>
            <Button clickHandler={() => setType('register')}>Sign up</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
