import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';


import '../pages/Main.scss';
import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '../components/Slide';


const Main = () => {

    let [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        await axios
            .get('http://localhost:3000/data/exData.json')
            .then((result) => setData(result.data.item));
    }

    console.log(data)

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:3000/data/exData.json")
    //     .then(res => res.json())
    //     .then(json => setData(json.data));    
    // })

    return (
        <Fragment>
            <Container className="mainContainer" fluid>
                <Row className="imgSlideArea">
                    <Col>
                        <Slider />
                    </Col>
                </Row>
                <Row className="rowWrap wellcomeArea">
                    <Col>
                        <h2 className="d-flex flex-column">커피타운만의 특별한 메뉴를 만나보세요.</h2>
                        <p>커피부터 음료, 다양한 디저트까지</p>
                    </Col>

                </Row>
                <Row className="rowWrap listArea listArea_1">
                    <Col>
                        <div className="listBox">
                            <div>name: {data[0].product_name}</div>
                            <div>price: {data[0].product_price}</div>
                            <div>ea: {data[0].product_ea}</div>
                            <img src={data[0].product_image}></img>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row className="rowWrap listArea listArea_2">리스트 영역2</Row>
                <Row className="rowWrap listArea listArea_3">리스트 영역3</Row>
            </Container>
        </Fragment>
    )
}

export default Main;