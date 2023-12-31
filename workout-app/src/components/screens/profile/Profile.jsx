import cn from 'clsx';

import Loader from '../../ui/loader/Loader';

import stylesLayout from '../../layout/Layout.module.scss';
import Header from '../../layout/header/Header';

import styles from './Profile.module.scss';
import { useProfile } from './useProfile';

const Profile = () => {
  const { data, isLoading } = useProfile();
  return (
    <div
      className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
      style={{ backgroundImage: `url('/images/profile-bg.jpg')`, height: 356 }}
    >
      <Header />

      <div className={styles.center}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <img src="/images/header/user.svg" alt="profile" height="56" draggable={false} />
            <h1 className={stylesLayout.heading}>{data?.email}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
