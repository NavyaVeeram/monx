import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Bang1 from '../GalleryBang/Bang1.jpeg';

function CorporateTeams() {
  const teamBuildingData = [
    { title: 'Conference hall', image: Bang1 },
    { title: 'Conference hall', image: Bang1 },
    { title: 'Conference hall', image: Bang1 },
    { title: 'Conference hall', image: Bang1 },
    // Add other team building activities similarly
  ];

  return (
    <>
    <Container fluid className='mt-5'>
      <h3 style={{textAlign:'center',color:'red'}}>Corporate Teams</h3>
      <Row >
        {teamBuildingData.map((activity, index) => (
          <Col key={index} md={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={activity.image} />
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                {/* Add other card content as needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
      <Container fluid className='mt-2'>
      <Row >
        {teamBuildingData.map((activity, index) => (
          <Col key={index} md={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={activity.image} />
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                {/* Add other card content as needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default CorporateTeams;
