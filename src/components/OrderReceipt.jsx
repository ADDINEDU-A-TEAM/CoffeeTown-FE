import React from 'react';
import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router';
// import { useLocation } from 'react-router-dom';
import '../components/OrderReceipt.scss';

const OrderReceipt = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <div className='receipt-container'>
      <h3 className='receipt-title'>주문 내역</h3>
      <ul className='receipt-list'>
        <li>
          <div className='item display-flex space-between'>
            <div>아이템이름</div>
            <div>₩ 4,000</div>
          </div>
        </li>
      </ul>
      <div className='display-flex space-between receipt-title2'>
        <div>
          <strong>Total:</strong>
        </div>
        <div>
          <strong>₩ 최종가격</strong>
        </div>
      </div>

      <Button
        variant='dark'
        className='payment-button'
        onClick={() => {
          window.alert('주문이 완료되었습니다');
        }}
      >
        결제하기
      </Button>

      <div style={{ fontSize: "15px", lineHeight: "18px" }}>
        결제 진행 후 주문완료된 상품은 결제를 취소할 수 없습니다. 
        결제 관련 오류나 문의사항은 오류가 발생한 해당 카드사로 연락바랍니다.
      </div>
    </div>
  );
};

export default OrderReceipt;
