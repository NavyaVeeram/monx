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
            <ul>
              <li><a href="#">Cancellation & Refunds</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Upcoming Events</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </Col>

          {/* Resorts Section */}
          <Col md={4}>
            <h5>Resorts</h5>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li><a href="#">Resorts in Kanakapura Road</a></li>
              <li><a href="#">Resorts in Sakleshpur</a></li>
              {/* ... (other links) ... */}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
