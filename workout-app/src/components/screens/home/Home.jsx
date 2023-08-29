import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import Button from '../../ui/button/Button';

import Layout from '../../layout/Layout';

import styles from './Home.module.scss';

function Home() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  return (
    <Layout bgImage="images/home-bg.jpg">
      <Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
        {isAuth ? 'new' : 'Sign in'}
      </Button>
      <h1 className={styles.heading}>EXERCISE FOR YOUR BODY</h1>
    </Layout>
  );
}

export default Home;