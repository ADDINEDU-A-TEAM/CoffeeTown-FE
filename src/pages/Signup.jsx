import React, { Fragment } from 'react';
import '../pages/Signup.scss';
import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import AgreeUse from '../components/AgreeUse';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const Signup = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_PROXY}/api/users/join`,
        {
          user_email: email,
          user_password: password,
          user_nickname: nickname,
          user_name: name,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + sessionStorage.getItem('token'),
          },
        }
      );

      if (response.status == 201) {
        window.alert('회원가입이 성공적으로 되었습니다');
        navigate('/');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <Container fluid onSubmit={handleSubmit}>
        <Row className='signupWrap'>
          <Col className='d-flex flex-column align-items-center'>
            <p className='signupTxt mt-5 mb-5'>회원가입</p>
            <Form className='signupBox d-flex flex-column align-items-center'>
              <p className='wellcomeTxt'>
                커피타운 <span>회원가입</span> 안내
              </p>
              {error && <div className='errorMessage'>{error}</div>}
              <Form.Group className='formGroup mb-4'>
                <Form.Control
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  placeholder='이메일 주소를 입력해주세요.'
                />
                <p id='emailMessage' className='message'>
                  {' '}
                </p>
              </Form.Group>
              <Form.Group className='formGroup mt-1 mb-4'>
                <Form.Control
                  id='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  placeholder='사용하실 비밀번호를 입력해주세요.'
                />
                <p id='pwMessage' className='message'>
                  {' '}
                </p>
              </Form.Group>
              <Form.Group className='formGroup'>
                <Form.Control
                  type='text'
                  placeholder='이름을 입력해주세요.'
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='formGroup mt-1 mb-4'>
                <Form.Control
                  type='text'
                  placeholder='사용하실 닉네임을 입력해주세요.'
                  onChange={(e) => setNickname(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='formGroup mb-4'>
                <Form.Control
                  as='textarea'
                  placeholder='
                                    제 1조
                                    이 약관은 주식회사 커피타운이 운영하는 온라인쇼핑몰에서 제공하는 전자상거래 관련 서비스(이하 “서비스”라 함)를 이용함에 있어 커피타운과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                                '
                  disabled
                />
              </Form.Group>
              <AgreeUse />
              <Button
                id='signupBtn'
                as='input'
                type='submit'
                value='회원가입'
              />

              {''}
              <p className='subTxt mb-5'>
                * 커피타운은 Chrome, Firefox, Safari 브라우저에 최적화
                되어있습니다.
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Signup;
