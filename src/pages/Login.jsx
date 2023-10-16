import React, { Fragment } from 'react';
import '../pages/Login.scss';
import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

import { useNavigate } from 'react-router-dom';

const Login = () => {

    const movePage = useNavigate();

    function goSignup(){
        movePage('/Signup');
    }

    function goMain(){
        movePage('/Main');
    }

    return (
        <Fragment>
            <Container fluid>
                <Row className='loginWrap'>
                    <Col className="d-flex flex-column align-items-center">
                        <p className="loginTxt mt-5 mb-5">로그인</p>
                        <Form className="loginBox d-flex flex-column align-items-center">
                            <p className="wellcomeTxt"><span>환영합니다!</span> 커피타운 입니다.</p>
                            <Form.Group className="formGroup">
                                <Form.Control type="text" placeholder="아이디를 입력해주세요." />
                            </Form.Group>
                            <Form.Group className="formGroup mt-1 mb-2">
                                <Form.Control type="password" placeholder="비밀번호를 입력해주세요." />
                            </Form.Group>
                            <p className="subTxt mb-5">* 커피타운은  Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.</p>
                            <Button onClick={goMain} id="loginBtn" as="input" type="submit" value="로그인" />{''}
                            <Button onClick={goSignup} id="signupBtn" as="input" type="button" value="회원가입" />{''}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Login;