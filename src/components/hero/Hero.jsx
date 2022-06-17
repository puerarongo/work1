import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.section__hero}>
      <div className={styles.hero__container}>
        <h1 className={styles.hero__title}>
          Test assignment for front-end developer
        </h1>
        <p className={styles.hero__text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button className={styles.button} type="button">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Hero;
