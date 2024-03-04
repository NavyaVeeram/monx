import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Bang4 from '../GalleryBang/Bang4.jpeg';

function PaidActivities() {
  const teamBuildingData = [
    { title: 'Adventures', image:Bang4 },
    { title: ' playing', image: Bang4 },
    { title: 'Conference hall', image: Bang4 },
    { title: 'Conference hall', image: Bang4 },
    // Add other team building activities similarly
  ];

  return (
    <>

     <h3 style={{textAlign:'center',color:'red'}}>Paid Activities</h3>
    <Container className='m-5'>
     <Row>
        {teamBuildingData.map((activity, index) => (
          <Col key={index} md={3} sm={6} lg={3} >
         
              <Card.Img variant="top" src={activity.image} style={{width:'100%'}}/>
      
           <Card.Body className=' text-center pb-5 bg-light'>{activity.title}</Card.Body>
          
          </Col>
        ))}
        </Row>
        </Container>
       
        <Container className='m-5'>
     <Row>
        {teamBuildingData.map((activity, index) => (
          <Col key={index} md={3} sm={6} lg={3} >
         
              <Card.Img variant="top" src={activity.image} style={{width:'100%'}}/>
      
           <Card.Body className=' text-center pb-5 bg-light'>{activity.title}</Card.Body>
          
          </Col>
        ))}
        </Row>
        </Container>
       
    </>
  );
}

export default PaidActivities;
