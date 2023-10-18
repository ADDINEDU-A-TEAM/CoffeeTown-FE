import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import './ProductList.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductList = () => {

    let [data, setData] = useState([
        {
            "id": 1,
            "product_name": "아이스 아메리카노",
            "product_price": "4500",
            "product_ea": "1",
            "product_image": "../img/listTestImg.png"

        },
        {
            "id": 2,
            "product_name": "아이스 헤이즐넛 라떼",
            "product_price": "5400",
            "product_ea": "1",
            "product_image": "../img/listTestImg2.png"
        },
        {
            "id": 3,
            "product_name": "아이스 카푸치노",
            "product_price": "4900",
            "product_ea": "1",
            "product_image": "../img/listTestImg3.png"
        },
        {
            "id": 4,
            "product_name": "아이스 글레이즈드 라떼",
            "product_price": "5700",
            "product_ea": "1",
            "product_image": "../img/listTestImg4.png"
        }
    ]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        await axios
            .get('http://localhost:3000/data/exData.json')
            .then((result) => setData(result.data.item));
    }

    console.log(data)

    return (
        <Fragment>
            <div className="listContainer d-flex flex-column align-items-center">
                <Row className="rowWrap listArea listArea_1">
                    <h2>COFFEE</h2>
                    <Col className="listWrap">
                        <div className="listBox">
                            <img src={data[0].product_image} alt="coffeeListImg1"></img>
                            <div>name: {data[0].product_name}</div>
                            <div>price: {data[0].product_price}</div>
                            <div>ea: {data[0].product_ea}</div>
                        </div>
                    </Col >
                    <Col className="listWrap">
                        <div className="listBox">
                            <img src={data[1].product_image} alt="coffeeListImg2"></img>
                            <div>name: {data[1].product_name}</div>
                            <div>price: {data[1].product_price}</div>
                            <div>ea: {data[1].product_ea}</div>
                        </div>
                    </Col>
                    <Col className="listWrap">
                        <div className="listBox">
                            <img src={data[2].product_image} alt="coffeeListImg3"></img>
                            <div>name: {data[2].product_name}</div>
                            <div>price: {data[2].product_price}</div>
                            <div>ea: {data[2].product_ea}</div>
                        </div>
                    </Col>
                    <Col className="listWrap">
                        <div className="listBox">
                            <img src={data[3].product_image} alt="coffeeListImg4"></img>
                            <div>name: {data[3].product_name}</div>
                            <div>price: {data[3].product_price}</div>
                            <div>ea: {data[3].product_ea}</div>
                        </div>
                    </Col>
                </Row>
                <Row className="rowWrap listArea listArea_2">리스트 영역2</Row>
                <Row className="rowWrap listArea listArea_3">리스트 영역3</Row>
            </div>
        </Fragment>
    )
}

export default ProductList;
