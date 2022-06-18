import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'redux/operations/operation';
import Contact from './contact/Contact';
import styles from './Contacts.module.css';

const Contacts = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const u = useSelector(state => state);
  const userCards = useSelector(state => state.data.user.users);

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.contacts__title}>Working with GET request</h2>
      <ul className={styles.contacts__container}>
        {console.log('state', u)}
        {userCards &&
          userCards.map(elem => (
            <Contact
              key={elem.id}
              photo={elem.photo}
              name={elem.name}
              position={elem.position}
              email={elem.email}
              phone={elem.phone}
            />
          ))}
      </ul>
      <button className={styles.button} type="button" onClick={showMore}>
        Show more
      </button>
    </section>
  );
};

export default Contacts;
