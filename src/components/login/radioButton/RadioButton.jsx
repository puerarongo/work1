import React from 'react';
import styles from './RadioButton.module.css';

const RadioButton = ({ id, name, handler }) => {
  return (
    <label className={styles.radio__label}>
      <input
        type="radio"
        name="position"
        value={id}
        onChange={handler}
        required
      />
      {name}
    </label>
  );
};

export default RadioButton;
