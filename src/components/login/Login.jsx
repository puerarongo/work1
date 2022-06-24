import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToken, postUsers, getPosition } from 'redux/operations/operation';
import RadioButton from './radioButton/RadioButton';
import styles from './Login.module.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');

  const dispatch = useDispatch();
  const positions = useSelector(state => state.data.position.positions);

  useEffect(() => {
    dispatch(getPosition());
  }, [dispatch]);

  const inputHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'phone':
        return setPhone(value);
      case 'position':
        return setPosition(value);
      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    dispatch(getToken()).then(request => {
      const token = request.payload.token;
      dispatch(postUsers({ token, name, email, phone, position }));
    });

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.login__title}>Working with POST request</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={styles.login__label}>
          <input
            className={styles.login__input}
            type="text"
            name="name"
            value={name}
            onChange={inputHandler}
            placeholder="Your name"
            required
          />
        </label>
        <label className={styles.login__label}>
          <input
            className={styles.login__input}
            type="email"
            name="email"
            value={email}
            onChange={inputHandler}
            placeholder="Email"
            required
          />
        </label>
        <label className={styles.login__label}>
          <input
            className={styles.login__input}
            type="phone"
            name="phone"
            value={phone}
            onChange={inputHandler}
            placeholder="Phone"
            required
          />
          <p className={styles.login__phone}>+38 (XXX) XXX - XX - XX</p>
        </label>

        <div className={styles.login__radio}>
          <h3>Select your position</h3>
          {positions &&
            positions.map(({ id, name }) => (
              <RadioButton
                key={id}
                id={id}
                name={name}
                handler={inputHandler}
              />
            ))}
        </div>
        <button className={styles.button} type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Login;
