import React from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import Contacts from './contacts/Contacts';
import Login from './login/Login';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Contacts />
      <Login />
    </>
  );
};
