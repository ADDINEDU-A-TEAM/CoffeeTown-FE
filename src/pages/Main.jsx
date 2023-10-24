import React, { Fragment } from 'react';
import ProductList from '../components/ProductList';

import '../pages/Main.scss';
import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '../components/Slide';

const Main = ({ setData, data, addToCart, onCheckEnter, setSearch }) => {
  return (
    <Fragment>
      <Container className='mainContainer d-flex' fluid>
        <Row className='imgSlideArea'>
          <Col>
            <Slider />
          </Col>
        </Row>
        <Row className='rowWrap wellcomeArea'>
          <Col>
            <h2 className='d-flex flex-column'>
              커피타운만의 특별한 메뉴를 만나보세요.
            </h2>
            <p>커피부터 음료, 다양한 디저트까지</p>
            <p>원하는 메뉴를 검색해 보세요</p>
            <input
              type='text'
              onKeyPress={onCheckEnter}
              onChange={(e) => setSearch(e.target.value)}
              placeholder=' 🔍 메뉴를 입력해보세요~!'
            />
          </Col>
        </Row>
        <ProductList setData={setData} data={data} addToCart={addToCart} />
      </Container>
    </Fragment>
  );
};

export default React.memo(Main);
