import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact__container}>
      <div className={styles.avatar__container}>
        <img className={styles.contact__avatar} src="" alt="" />
      </div>
      <h3 className={styles.contact__name}>Name</h3>
      <p></p>
      <p></p>
    </div>
  );
};

export default Contact;
