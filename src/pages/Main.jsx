import React, { Fragment } from 'react';
import '../pages/Main.scss';
import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

const Main = () => {

    return (
        <Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <p>메인 페이지!</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Main;


