import React, { Fragment, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from '../components/Slide';
import '../pages/Ask.scss';
import '../styles.scss';
import AskBoard from '../components/AskBoard';

export default function Ask() {
  const [askList, setAskList] = useState([]);
  const [askValue, setAskValue] = useState('');

  useEffect(() => {
    inquiry();
  }, []);

  const inquiry = async () => {
    // const response = await api.get('/tasks');
    // setAskList(response.data.data);
  };

  const addQuestion = async () => {
    // try {
    //   const response = await api.post('/tasks', {
    //     ask: askValue,
    //   });
    //   if (response.status === 200) {
    //     inquiry();
    //   }
    //   setAskValue('');
    // } catch (error) {
    //   console.log('error:', error);
    // }
  };
  return (
    <Fragment>
      <Container
        className=' ask-all listContainer d-flex flex-column align-items-center'
        fluid
      >
        <Row>
          <AskBoard />
        </Row>

        <Row>
          <Col>
            <input
              type='text'
              placeholder='문의사항을 작성하세요'
              onChange={(event) => setAskValue(event.target.value)}
              value={askValue}
            />
          </Col>
          <Col>
            <Button
              variant='dark'
              className='payment-button'
              onClick={addQuestion}
            >
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
