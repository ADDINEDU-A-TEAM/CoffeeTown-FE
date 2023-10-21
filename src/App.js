import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Cart from './pages/Cart';

import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get('http://localhost:3000/data/exData.json')
      .then((result) => setData(result.data));
  };
  return (
    <Fragment>
      <BrowserRouter>
        <Reset />
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route
            path={'/'}
            element={<Login user={user} setUser={setUser} />}
          ></Route>
          <Route path={'/Signup'} element={<Signup />}></Route>
          <Route
            path={'/Main'}
            element={<Main data={data} setData={setData} />}
          ></Route>
          <Route path={'/Cart'} element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
