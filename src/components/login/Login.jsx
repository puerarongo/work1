import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.login__title}>Working with POST request</h2>
      <form className={styles.form}>
        <label className={styles.login__label}>
          <input
            className={styles.login__input}
            type="text"
            placeholder="Your name"
            required
          />
        </label>
        <label className={styles.login__label}>
          <input
            className={styles.login__input}
            type="email"
            placeholder="Email"
            required
          />
        </label>
        <label className={styles.login__label}>
          <input
            className={styles.login__input}
            type="phone"
            placeholder="Phone"
            required
          />
          <p className={styles.login__phone}>+38 (XXX) XXX - XX - XX</p>
        </label>

        <h3>Select your position</h3>
        <label>
          <input type="radio" />
        </label>
        <button className={styles.button} type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Login;
