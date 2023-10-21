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

    useEffect(() => {
    
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios
            .get('http://localhost:5000/main/list')
            .then((result) => setData(result.data));
    };
    return (
        <Fragment>
            <BrowserRouter>
                <div id="wrap" className="d-flex">
                    <Reset />
                    <Header />
                    <Routes>
                        <Route path={"/"} element={<Login />}></Route>
                        <Route path={"/Signup"} element={<Signup />}></Route>
                        <Route path={"/Main"} element={<Main setData={setData} data={data} />}></Route>
                        <Route path={"/Cart"} element={<Cart setData={setData} data={data} />}></Route>
                    </Routes>
                    <Footer />
                </div>    
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
