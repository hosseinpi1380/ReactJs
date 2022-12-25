import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
    return (
        <Container className='m-auto'>
            <Row  >
                <Col className='bg-warning' sm={6} md={4} lg={2}>1</Col>
                <Col className='bg-secondary' sm={6} md={4} lg={2}>2</Col>
                <Col className='bg-danger' sm={6} md={4} lg={2}>3</Col>
                <Col className='bg-primary' sm={6} md={4} lg={2}>4</Col>
                <Col className='bg-success' sm={6} md={4} lg={2}>5</Col>
                <Col className='bg-dark' sm={6} md={4} lg={2}>6</Col>
            </Row>
        </Container>
    );
}

export default ContainerExample;