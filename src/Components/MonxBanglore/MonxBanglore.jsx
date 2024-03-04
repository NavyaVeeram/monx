import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import ComplementaryActivities from '../ComplemetaryActivities/ComplementaryActivities';
import PaidActivities from '../PaidActivities/PaidActivities';
const MonxBanglore = () => {

    
  return (
    <>
   
   <Container fluid style={{marginTop:'120px'}}>
   <Row >
    <Col className='p-0'><img src='https://static.wixstatic.com/media/19f727_26d505d6312345a9af481a714dcf9a9d~mv2.jpg/v1/fill/w_1939,h_845,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/19f727_26d505d6312345a9af481a714dcf9a9d~mv2.jpg'className='w-100'/>
   </Col>
   <Col className='p-0'><img src='https://static.wixstatic.com/media/19f727_c2cf0e0d5cce4e54bc9439b944af6621~mv2.jpeg/v1/fill/w_1200,h_523,al_c,q_85,enc_auto/19f727_c2cf0e0d5cce4e54bc9439b944af6621~mv2.jpeg' className='w-100'/>
     </Col> </Row>
      </Container>
      <Container className="my-5">
        <h2>Featured Destinations</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <Card className='overflow-hidden'>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='img-fluid card-hover'/>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="info">           
                 <Link as={Link} to="/gallerybang" style={{color:'green',fontWeight:'bold'}} className='text-light text-decoration-none'>Explore</Link></Button>
              </Card.Body>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <Card className='overflow-hidden'>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='img-fluid card-hover'/>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="info">                 <Link as={Link} to="/gallerysak"  className='text-light text-decoration-none'>Explore</Link></Button>
              </Card.Body>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <Card className='overflow-hidden'>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='img-fluid card-hover'/>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="info">  <Link as={Link} to="/galleryram" className='text-light text-decoration-none'>Explore</Link></Button>
              </Card.Body>
            </Card>
          </div>
        </div>
       
       </Container>
<ComplementaryActivities/>
<PaidActivities/>
       </>
  );
};

export default MonxBanglore;
