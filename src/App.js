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
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [user, setUser] = useState(location.state ? location.state?.user : '');

  console.log('appuser', location.state);

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
      <div id='wrap' className='d-flex'>
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
            element={<Main setData={setData} data={data} />}
          ></Route>
          <Route
            path={'/Cart'}
            element={<Cart setData={setData} data={data} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
