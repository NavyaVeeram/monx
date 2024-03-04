import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Bang2 from '../GalleryBang/Bang2.jpeg';

function ComplementaryActivities() {
  const teamBuildingData = [
    { title: 'Adventures', image:Bang2 },
    { title: ' playing', image: Bang2 },
    { title: 'Conference hall', image: Bang2 },
    { title: 'Conference hall', image: Bang2 },
    // Add other team building activities similarly
  ];

  return (
    <>
     <h3 style={{textAlign:'center',color:'red'}}>ComplementaryActivities</h3>
    <Container className='m-5'>
     <Row>
        {teamBuildingData.map((activity, index) => (
          <Col key={index} md={3} sm={6} lg={3} >
          <div className='position-relative'>
              <Card.Img variant="top" src={activity.image} style={{width:'100%'}}/>
      
                <p className='position-absolute top-0 end-0 p-2 text-light bg-success ' style={{borderBottomLeftRadius:'15px'}}> monx </p>
          
              </div>
          
          </Col>
        ))}
        </Row>
        </Container>
        <Container className='m-5'>
        <Row >
        {teamBuildingData.map((activity, index) => (
          <Col key={index} md={3} sm={6} lg={3} >
          <div className='position-relative'>
              <Card.Img variant="top" src={activity.image} style={{width:'100%'}}/>
      
                <p className='position-absolute top-0 end-0 p-2 text-light bg-success ' style={{borderBottomLeftRadius:'15px'}}> monx </p>
          
              </div>
          
          </Col>
        ))}
        </Row>
      </Container>
    
    </>
  );
}

export default ComplementaryActivities;
