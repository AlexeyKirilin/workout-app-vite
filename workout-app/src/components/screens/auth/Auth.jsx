import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';
import Loader from '../../ui/loader/Loader';

import Layout from '../../layout/Layout';

import styles from './Auth.module.scss';
import { useAuthPage } from './useAuthPage';

const Auth = () => {
  const { errors, handleSubmit, isLoading, register, setType, onSubmit } = useAuthPage();
  return (
    <>
      <Layout heading="sign in" bgImage="/images/auth-bg.png" />
      <div className="wrapper-inner-page">
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.email?.message}
            type="text"
            name="email"
            placeholder="email"
            register={register}
            options={{
              required: 'email is required',
            }}
          />
          <Field
            error={errors?.password?.message}
            type="password"
            name="password"
            placeholder="password"
            register={register}
            options={{
              required: 'password is required',
            }}
          />
          <div className={styles.wrapperButtons}>
            <Button clickHandler={() => setType('login')}>Sign in</Button>
            <Button clickHandler={() => setType('register')}>Sign up</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
