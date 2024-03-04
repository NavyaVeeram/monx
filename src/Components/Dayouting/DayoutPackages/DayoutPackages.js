import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; 
import { Container, Row, Col } from 'react-bootstrap';
import packImage1 from './Groundplay.webp'
import packImage2 from './Childplayarea.webp'
import packImage3 from './fallsplay.webp'

export function Packages() {
    return (
        <div>
        <h2 style={{textAlign: 'center', padding: '30px'}}>Our Day outing Packages</h2>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={packImage1} alt='packImage1' />
                  <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>Mountain Cub Dayout</Card.Title>
                    <Card.Text>
                      <p><span>Timing-</span>11AM - 6PM</p>
                      <p><span>Meals-</span>Welcome Drink, Lunch, Hi-Tea.</p>
                      <p><span>Activities-</span>Complimentary Adventure Activities.</p>
                    </Card.Text>
                    <Card.Title style={{textAlign: 'center'}}> ₹1000/Person +GST</Card.Title>
                  </Card.Body>
                </Card>
                <Button variant="primary" style={{margin: '10px 80px'}}>Book Now</Button>
              </Col>
              <Col>
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={packImage2} alt='packImage2' />
                  <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>Mountain Cub Dayout</Card.Title>
                    <Card.Text>
                      <p><span>Timing-</span>11AM - 6PM</p>
                      <p><span>Meals-</span>Welcome Drink, Lunch, Hi-Tea.</p>
                      <p><span>Activities-</span>Complimentary Adventure Activities.</p>
                    </Card.Text>
                    <Card.Title style={{textAlign: 'center'}}> ₹1000/Person +GST</Card.Title>
                  </Card.Body>
                </Card>
                <Button variant="primary" style={{margin: '10px 80px'}}>Book Now</Button>
              </Col>
              <Col>
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={packImage3} alt='packImage3' />
                  <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>Mountain Cub Dayout</Card.Title>
                    <Card.Text>
                      <p><span>Timing-</span>11AM - 6PM</p>
                      <p><span>Meals-</span>Welcome Drink, Lunch, Hi-Tea.</p>
                      <p><span>Activities-</span>Complimentary Adventure Activities.</p>
                    </Card.Text>
                    <Card.Title style={{textAlign: 'center'}}> ₹1000/Person +GST</Card.Title>
                  </Card.Body>
                </Card>
                <Button variant="primary" style={{margin: '10px 80px'}}>Book Now</Button>
              </Col>
            </Row>
          </Container>
        </div>
    )
  }