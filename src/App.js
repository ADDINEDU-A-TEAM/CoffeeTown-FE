import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Chart from './pages/Chart';

import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get('http://localhost:3000/data/mockData.json')
      .then((result) => setData(result.data.item));
  };
  return (
    <Fragment>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/Signup'} element={<Signup />}></Route>
          <Route path={'/Main'} element={<Main />}></Route>
          <Route path={'/chart'} element={<Chart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
