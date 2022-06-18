import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ photo, name, position, email, phone }) => {
  return (
    <li className={styles.contact__container}>
      <div className={styles.avatar__container}>
        <img className={styles.contact__avatar} src={photo} alt={name} />
      </div>
      <h3 className={styles.contact__name}>`${name}`</h3>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </li>
  );
};

export default Contact;
