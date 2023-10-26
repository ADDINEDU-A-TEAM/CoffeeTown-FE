import React, { Fragment, useState } from 'react';
import '../pages/Login.scss';
import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ user, setUser }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_PROXY}/api/users/login`,
        {
          user_email: loginEmail,
          user_password: loginPassword,
        },
        {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + sessionStorage.getItem('token'),
        }
      );
      if (response.status == 200) {
        setUser(response.data);
        sessionStorage.setItem('token', response.data.token); //세션스토리지에 토큰저장
        response.defaults.headers['authorization'] =
          'Bearer ' + response.data.token;
      }

      throw new Error(response.message);
    } catch (error) {
      //   setError(error.response.data.message);
      //   console.log(error.response.data.message);
      //   console.log(error);
    }
  };
  const getToken = window.sessionStorage.getItem('token');
  if (getToken) {
    return navigate('/main', {
      state: { user },
    });
  }

  return (
    <Fragment>
      <Container fluid onSubmit={handleLogin}>
        <Row className='loginWrap'>
          <Col className='d-flex flex-column align-items-center'>
            <p className='loginTxt mt-5 mb-5'>로그인</p>
            <Form className='loginBox d-flex flex-column align-items-center'>
              <p className='wellcomeTxt'>
                <span>환영합니다!</span> 커피타운 입니다.
              </p>
              {error && <div className='errorMessage'>{error}</div>}
              <Form.Group className='formGroup'>
                <Form.Control
                  type='text'
                  placeholder='e-mail을 입력해주세요.'
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className='formGroup mt-1 mb-2'>
                <Form.Control
                  type='password'
                  placeholder='비밀번호를 입력해주세요.'
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <p className='subTxt mb-5'>
                * 커피타운은 Chrome, Firefox, Safari 브라우저에 최적화
                되어있습니다.
              </p>
              <Button id='loginBtn' as='input' type='submit' value='로그인' />

              <Button
                onClick={() => {
                  navigate('/Signup');
                }}
                id='signupBtn'
                as='input'
                type='button'
                value='회원가입'
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default React.memo(Login);
