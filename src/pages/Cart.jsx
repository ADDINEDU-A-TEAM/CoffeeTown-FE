import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { cartActions } from '../action/cartAction';
// import CartProductCard from '../component/CartProductCard';
import OrderReceipt from '../components/OrderReceipt';
import '../pages/Cart.scss';
import QuantityControl from '../components/QuantityControl';

import exImg from '../assets/images/listCoffeeImg1.png';
// import exImg2 from '../assets//images/listCoffeeImg2.png'

const Cart = () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    //카트리스트 불러오기
  }, []);

  return (
    <Container className='CartAll'>
      <h2 className='cartTxt d-flex justify-content-center'>장바구니</h2>
      <Row>
        <Col
          xs={12}
          md={8}
          style={{
            borderTop: '1px solid #a4a4a4',
            borderBottom: '1px solid #a4a4a4',
          }}
        >
          <div
            className='text-align-center empty-bag'
            style={{ display: 'none' }}
          >
            <h2>카트가 비어있습니다.</h2>
            <div>상품을 담아주세요!</div>
          </div>
          <ul className='cart-bag'>
            <li className='cartListBox d-flex'>
              <img src={exImg} alt='coffeeListImg1'></img>
              <div className='cWrap d-flex'>
                <div className='c_txt_box d-flex align-items-center'>
                  <Col className='c_name' md={8}>
                    아이스 아메리카노
                  </Col>
                  <Col className='quan_box' md={2}>
                    <QuantityControl />
                  </Col>
                  <Col className='c_price' md={2}>
                    4000원
                  </Col>
                </div>
              </div>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <OrderReceipt />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
