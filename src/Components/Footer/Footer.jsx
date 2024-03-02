import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-success text-light p-4">
      <Container>
        <Row>
          {/* Contact Information Column */}
          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>8909679356</p>
            <p><a href="mailto:booking@themonxgroup.com">Booking@themonxgroup.com</a></p>
          </Col>

          {/* Follow Us Column */}
          <Col md={4} className="mb-4">
            <h5>Follow Us</h5>
            {/* Add your social media links or icons here */}
          </Col>

          {/* Company Information Column */}
          <Col md={4}>
            <h5>A Unit Of Hurray Holidays Pvt. Ltd.</h5>
            <p>GSTN- 29AAECH3805M1ZB</p>
            <p>CIN- U74999KA2017PTC107870</p>
          </Col>
        </Row>

        {/* Useful Links Section */}
        <Row className="mt-4">
          <Col md={4}>
            <h5>Useful Links</h5>
            <p>Cancellation & Refunds</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Upcoming Events</p>
            <p>Blogs</p>
            <p>About us</p>
            <p>Resources</p>
          </Col>

          {/* Resorts Section */}
          <Col md={4}>
            <h5>Resorts</h5>
            <p>Resorts in Kanakapura Road</p>
            <p>Resorts in Sakleshpur</p>
            {/* ... (other content) ... */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
