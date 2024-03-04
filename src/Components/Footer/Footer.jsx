import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../Images/logo.png'
const Footer = () => {
  return (
    <Container fluid className="bg-success text-light p-5">
      <Container>
        <Row>
          <Col md={4}>
            <h3>
            Contact Us - 8909679356</h3>
<p>Booking@themonxgroup.com</p>
<p>Follow Us</p>
<p>A Unit Of Hurray Holidays Pvt. Ltd. GSTN- 29AAECH3805M1ZB CIN- U74999KA2017PTC107870</p>
<img src={logo} style={{width:'120px',Height:'120px'}} alt='logo'/>
          </Col>
          <Col md={4}>
            <h5>Useful Links</h5>
          <p> Useful Links</p>
<p>Cancellation & Refunds</p>
<p>Terms & Conditions</p>
<p>Privacy Policy</p>
<p>Upcoming Events</p>
<p>Blogs</p>
<p>About us</p>   </Col>
          <Col md={4}>
          <h3>Resources</h3>
<p>Resorts in Kanakapura Road</p>
<p>Resorts in Sakleshpur</p>
<p>Homestays in Sakleshpur</p>
<p>Resorts in Bangalore</p>
<p>Resorts in Bangalore for team outing</p>
<p>Resorts near Bangalore for night stay</p>
<p>Best resorts in Bangalore for family</p>
<p>Best resorts in Bangalore for day outing</p>
<p>Camping resorts near Bangalore</p>
<p>Best resort with activities in Bangalore</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
