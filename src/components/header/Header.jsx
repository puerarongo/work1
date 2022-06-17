import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__into}>
          <svg className={styles.logo__icon}>
            <use href="../../img/logo/logo__icon.svg"></use>
          </svg>
          <svg className={styles.logo__text}>
            <use href="../../img/logo/logo__text.svg"></use>
          </svg>
        </div>
        <div>
          <button className={styles.button} type="button">
            Users
          </button>
          <button className={styles.button} type="button">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
