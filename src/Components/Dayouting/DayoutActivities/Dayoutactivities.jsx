
import Card from 'react-bootstrap/Card';
import actimag1 from './actimage1.webp'
import { Container, Row, Col } from 'react-bootstrap';

export function Dayoutactivities() {
    const teamBuildingData = [
        { title: 'Conference hall', image: actimag1 },
        { title: ' hall', image: actimag1 },
        { title: 'Conference hall', image: actimag1 },
   
        // Add other team building activities similarly
      ];
    
    return (
        <div>
        <h2 style={{textAlign: 'center', padding: '30px'}}>Our Day outing Packages</h2>
        <Container className='m-5'>
      <h3 style={{textAlign:'center',color:'red'}}>Corporate Teams</h3>
      <Row >
        {teamBuildingData.map((activity, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={activity.image} style={{width:'100%'}}/>
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                {/* Add other card content as needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
      
      <Container className='m-5'>
    
      <Row className='d-flex' >
        {teamBuildingData.map((activity, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={activity.image} style={{width:'100%'}}/>
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                {/* Add other card content as needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>    
        </div>
    )
    
}