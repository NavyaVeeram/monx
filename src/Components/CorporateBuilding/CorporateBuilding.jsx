import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Bang1 from '../GalleryBang/Bang1.jpeg'
const activitiesData = [
  { title: 'CLASH OF CLANS', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 5000',image:Bang1 },
  { title: 'JUNGLE PACKS', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 5000' },
  { title: 'THE TASK MASTERS', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 7000' },
  { title: 'WORLD WAR II', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 7000' },
  { title: 'BEE COLONIES', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 5000' },
  { title: 'FUN DE MENTAL', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 5000' },
  { title: 'MASTER CHEF', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 15000' },
  { title: 'FILMISTAN', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 12000' },
  { title: 'VISIONARIES ON MISSION', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 5000' },
  { title: 'DECODE COMMUNICATION', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 7000' },
  { title: 'ACTUATOR', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 7000' },
  { title: 'DRAMEBAZ', location: 'Indoor / Outdoor', participants: '20-400ppl', duration: '60-90 min', price: '₹ 10000' },
];

const CorporateBuilding = () => {
  return (
    <Container fluid className='mt-5'>
            <h3 style={{textAlign:'center',color:'red'}}>Corporate Build</h3>
      <Row className="justify-content-center">
        {activitiesData.map((activity, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-3">
            <Card>
            <Card.Img variant="top" src={activity.image} />
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {activity.location}<br />
                  <strong>No of Participants:</strong> {activity.participants}<br />
                  <strong>Time Duration:</strong> {activity.duration}<br />
                  <strong>Price Starts From</strong> {activity.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CorporateBuilding;
