import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OrderReceipt from '../components/OrderReceipt';
import '../pages/Cart.scss';
import QuantityControl from '../components/QuantityControl';

const Cart = ({ cartItems, setCartItems }) => {

  // 각 아이템 정보를 기반으로 아이템 리스트와 총 가격을 계산
  const itemInfo = cartItems.map((item) => ({
    name: item.product_name,
    price: item.quantity * item.product_price,
  }));

  // 모든 아이템의 가격 합계를 계산
  const total = itemInfo.reduce((acc, item) => acc + item.price, 0);

  // 더하기 버튼 클릭 시 수량 증가
  const handleDecrease = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.product_id === item.product_id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  // 빼기 버튼 클릭 시 수량 감소
  const handleIncrease = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.product_id === item.product_id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  // itemDeleteBtn 클릭 시 아이템 삭제
  const handleDelete = (productId) => {
    // productId를 기반으로 상품을 찾아서 제거
    const updatedCartItems = cartItems.filter((item) => item.product_id !== productId);
    setCartItems(updatedCartItems);
  };

  // itemAlldeleteBtn 클릭 시 모든 아이템 삭제
  const handleAllDelete = () => {
    setCartItems([]);
  };

  return (
    <Container fluid className='CartAll'>
      <h2 className='cartTxt d-flex justify-content-center'>장바구니</h2>
      <Row>
        <Col className="colWrap"
          xs={12}
          md={8}
          style={{
            borderTop: '1px solid #a4a4a4',
            borderBottom: '1px solid #a4a4a4',
          }}
        >
          <p className="itemAllDeleteBtn d-flex" onClick={handleAllDelete}>전체삭제</p>
          {cartItems.length === 0 ? (
            <div className='text-align-center empty-bag'>
              <h2>카트가 비어있습니다.</h2>
              <div>상품을 담아주세요!</div>
            </div>
          ) : (
            <ul className='cart-bag'>
              {cartItems.map((item) => (
                <li key={item.product_id} className='cartListBox d-flex'>
                  <img src={item.product_image} alt='coffeeListImg1'></img>
                  <div className='cWrap d-flex'>
                    <div className='c_txt_box d-flex align-items-center'>
                      <Col className='c_name' md={8}>
                        {item.product_name} ({item.quantity}개)
                      </Col>
                      <Col className='quan_box' md={2}>
                        <QuantityControl
                          quantity={item.quantity}
                          onDecrease={() => handleDecrease(item)}
                          onIncrease={() => handleIncrease(item)}
                          price={item.product_price}
                        />
                      </Col>
                      <Col className='c_price' md={2}>
                        {item.quantity * item.product_price}원
                      </Col>
                    </div>
                  </div>
                  <p className="itemDeleteBtn" onClick={() => handleDelete(item.product_id)}>x</p>
                </li>
              ))}
            </ul>
          )}
        </Col>
        <Col xs={12} md={4}>
          <OrderReceipt itemInfo={itemInfo} total={total} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
