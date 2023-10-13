import React, { Fragment } from 'react';
import '../pages/Signup.scss';
import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import AgreeUse from '../components/AgreeUse';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    const movePage = useNavigate();
    function goLogin() {
        movePage('/');
    }

    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");

    const [idMessage, setIdMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");
    const [emailMessage, setEmailMessage] = React.useState("");

    const [isId, setIsId] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isEmail, setIsEmail] = React.useState(false);

    const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{4,12}$/;
        if (!idRegExp.test(currentId)) {
            setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
            setIsId(false);
            document.getElementById("idMessage").style.color = "red";
        } else {
            setIdMessage("사용가능한 아이디 입니다.");
            setIsId(true);
            document.getElementById("idMessage").style.color = "black";
        }
        if (document.getElementById("id").value === "") {
            document.getElementById("idMessage").style.display = "none";
        } else {
            document.getElementById("idMessage").style.display = "block";
        }
    };

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPassword)) {
            setPasswordMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPassword(false);
            document.getElementById("pwMessage").style.color = "red";
        } else {
            setPasswordMessage("안전한 비밀번호 입니다.");
            setIsPassword(true);
            document.getElementById("pwMessage").style.color = "black";
        }
        if (document.getElementById("password").value === "") {
            document.getElementById("pwMessage").style.display = "none";
        } else {
            document.getElementById("pwMessage").style.display = "block";
        }
    };

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
            /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false);
            document.getElementById("emailMessage").style.color = "red";
        } else {
            setEmailMessage("사용 가능한 이메일 입니다.");
            setIsEmail(true);
            document.getElementById("emailMessage").style.color = "black";
        }
        if (document.getElementById("email").value === "") {
            document.getElementById("emailMessage").style.display = "none";
        } else {
            document.getElementById("emailMessage").style.display = "block";
        }
    };

    return (
        <Fragment>
            <Container fluid>
                <Row className='signupWrap'>
                    <Col className="d-flex flex-column align-items-center">
                        <p className="signupTxt mt-5 mb-5">회원가입</p>
                        <Form className="signupBox d-flex flex-column align-items-center">
                            <p className="wellcomeTxt">커피타운 <span>회원가입</span> 안내</p>
                            <Form.Group className="formGroup">
                                <Form.Control id="id" value={id} onChange={onChangeId} type="text" placeholder="사용하실 아이디를 입력해주세요." />
                                <p id="idMessage" className="message"> {idMessage} </p>
                            </Form.Group>
                            <Form.Group className="formGroup mt-1 mb-4">
                                <Form.Control id="password" name="password" value={password} onChange={onChangePassword} type="password" placeholder="사용하실 비밀번호를 입력해주세요." />
                                <p id="pwMessage" className="message"> {passwordMessage} </p>
                            </Form.Group>
                            <Form.Group className="formGroup">
                                <Form.Control type="text" placeholder="이름을 입력해주세요." />
                            </Form.Group>
                            <Form.Group className="formGroup mt-1 mb-4">
                                <Form.Control type="text" placeholder="사용하실 닉네임을 입력해주세요." />
                            </Form.Group>
                            <Form.Group className="formGroup mb-4">
                                <Form.Control id="email" name="email" value={email} onChange={onChangeEmail} type="email" placeholder="이메일 주소를 입력해주세요." />
                                <p id="emailMessage" className="message"> {emailMessage} </p>
                            </Form.Group>
                            <Form.Group className="formGroup mb-4">
                                <Form.Control as="textarea" placeholder="
                                    제 1조
                                    이 약관은 주식회사 커피타운이 운영하는 온라인쇼핑몰에서 제공하는 전자상거래 관련 서비스(이하 “서비스”라 함)를 이용함에 있어 커피타운과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                                " disabled />
                            </Form.Group>
                            <AgreeUse />
                            <Button onClick={goLogin} id="signupBtn" as="input" type="submit" value="회원가입" />{''}
                            <p className="subTxt mb-5">* 커피타운은  Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Signup;