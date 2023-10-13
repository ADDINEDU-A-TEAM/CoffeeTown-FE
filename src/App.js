import React, { Fragment } from 'react';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/Signup"} element={<Signup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
