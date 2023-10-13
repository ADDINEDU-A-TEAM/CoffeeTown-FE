import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import { Reset } from 'styled-reset';

const App = () => {
  return (
    <Fragment>
      <Reset />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
