import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

    let [data, setData] = useState([
        {
            "category_id": 1,
            "category_name": "Coffee",
            "product": [
                {
                    "product_id": 1,
                    "product_name": "아이스 아메리카노",
                    "product_price": "4500",
                    "product_ea": "1",
                    "product_image": "../img/listCoffeeImg1.png"
                },
                {
                    "product_id": 2,
                    "product_name": "아이스 헤이즐넛 라떼",
                    "product_price": "5400",
                    "product_ea": "1",
                    "product_image": "../img/listCoffeeImg2.png"
                },
                {
                    "product_id": 3,
                    "product_name": "아이스 카푸치노",
                    "product_price": "4900",
                    "product_ea": "1",
                    "product_image": "../img/listCoffeeImg3.png"
                },
                {
                    "product_id": 4,
                    "product_name": "아이스 글레이즈드 라떼",
                    "product_price": "5700",
                    "product_ea": "1",
                    "product_image": "../img/listCoffeeImg4.png"
                }
            ]
        },
        {
            "category_id": 2,
            "category_name": "Drink",
            "product": [
                {
                    "product_id": 1,
                    "product_name": "아이스 초코",
                    "product_price": "5200",
                    "product_ea": "1",
                    "product_image": "../img/listDrinkImg1.png"
                },
                {
                    "product_id": 2,
                    "product_name": "아이스 말차 슈페너",
                    "product_price": "5900",
                    "product_ea": "1",
                    "product_image": "../img/listDrinkImg2.png"
                },
                {
                    "product_id": 3,
                    "product_name": "우유",
                    "product_price": "4000",
                    "product_ea": "1",
                    "product_image": "../img/listDrinkImg3.png"
                },
                {
                    "product_id": 4,
                    "product_name": "아이스 얼그레이 티",
                    "product_price": "5400",
                    "product_ea": "1",
                    "product_image": "../img/listDrinkImg4.png"
                }
            ]
        },
        {
            "category_id": 3,
            "category_name": "Dessert",
            "product": [
                {
                    "product_id": 1,
                    "product_name": "블루치즈 케이크",
                    "product_price": "7300",
                    "product_ea": "1",
                    "product_image": "../img/listDessertImg1.png"
                },
                {
                    "product_id": 2,
                    "product_name": "레드벨벳 케이크",
                    "product_price": "6600",
                    "product_ea": "1",
                    "product_image": "../img/listDessertImg2.png"
                },
                {
                    "product_id": 3,
                    "product_name": "라즈베리 쇼콜라",
                    "product_price": "5800",
                    "product_ea": "1",
                    "product_image": "../img/listDessertImg3.png"
                },
                {
                    "product_id": 4,
                    "product_name": "몽블랑 케이크",
                    "product_price": "6300",
                    "product_ea": "1",
                    "product_image": "../img/listDessertImg4.png"
                }
            ]
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get('http://localhost:3000/data/exData.json')
                .then((result) => setData(result.data));
        };

        fetchData();
    }, []);
    return (
        <Fragment>
            <BrowserRouter>
                <Reset />
                <Header />
                <Routes>
                    <Route path={"/"} element={<Login />}></Route>
                    <Route path={"/Signup"} element={<Signup />}></Route>
                    <Route path={"/Main"} element={<Main setData={setData} data={data} />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
