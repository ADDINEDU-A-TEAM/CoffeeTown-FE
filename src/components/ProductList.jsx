import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './ProductList.scss';
import basket from '../assets/images/basket.png';
import HeartBtn from './heartBtn';

const ProductList = ({ data, setData, addToCart, cartItems }) => {
  return (
    <Fragment>
      {data.length > 0 ? (
        <div className='listContainer d-flex flex-column align-items-center'>
          {data.map((c) => {
            return (
              <Row key={c.category_id} className='rowWrap listArea listArea_1'>
                <h2>{c.category_name}</h2>
                {c.product.map((d) => {
                  return (
                    <Col key={d.product_id} className='listWrap'>
                      <div className='listBox'>
                        <img src={d.product_image} alt='coffeeListImg1'></img>
                        <div className='pWrap d-flex justify-content-between'>
                          <div className='p_txt_box'>
                            <div className='p_name'>{d.product_name}</div>
                            <div className='p_price'>{d.product_price}원</div>
                          </div>
                          <HeartBtn />
                        </div>
                        <Button
                          id='addBtn'
                          as='input'
                          type='submit'
                          value='담기'
                          onClick={() => addToCart(d)}
                        />
                        <img
                          className='basketImg'
                          src={basket}
                          alt='basketImg'
                        ></img>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </div>
      ) : (
        <h2 className='noSearch'>일치하는 메뉴가 없습니다</h2>
      )}
    </Fragment>
  );
};

export default ProductList;
