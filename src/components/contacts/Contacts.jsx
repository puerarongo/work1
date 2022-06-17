import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.contacts__title}>Working with GET request</h2>
      <div className={styles.contacts__container}>CARD</div>
      <button className={styles.button} type="button">
        Show more
      </button>
    </section>
  );
};

export default Contacts;
