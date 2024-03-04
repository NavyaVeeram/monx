import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export function Dayoutactivities() {
    return (
        <div>
        <h2 style={{textAlign: 'center', padding: '30px'}}>Our Day outing Packages</h2>
        <Container>
            <Row>
                <Col xs={12} md={3}>
                    <Image src="holder.js/171x180" rounded />
                </Col>
                <Col xs={12} md={3}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={12} md={3}>
                    <Image src="holder.js/171x180" thumbnail />
                </Col>
                <Col xs={12} md={3}>
                    <Image src="holder.js/171x180" thumbnail />
                </Col>
            </Row>
        </Container>
        </div>
    )
    
}