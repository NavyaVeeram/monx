import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
function ContactForm1() {
    const backgroundImage = 'url(https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149018549.jpg?t=st=1709276366~exp=1709279966~hmac=451f5117aeedaf5414a221d0a8c221d1cc0d38355604ad2f4e3562b627f5c866&w=1060)';
  
    const containerStyle = {
      background: `${backgroundImage} no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
    return (
        <div>
               <h2 className="text-center" style={{ color:'green',paddingTop:'100px'}}>Contact Us</h2>


<Container className='d-flex justify-content-center align-items-center contact-bg p-3' style={containerStyle}>

  <Form >
    {/* Register A Complaint Section */}
    <Form.Group className="mb-2">
      <Form.Control type="text" placeholder="Register A Complaint" readOnly />
    </Form.Group>

    {/* Personal Details Section */}
    <Row className="mb-2">
      <Col>
        <Form.Group controlId="name" className="mb-2">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="contactNumber" className="mb-2">
          <Form.Control type="tel" placeholder="Contact Number" />
        </Form.Group>
      </Col>
    </Row>

    <Form.Group controlId="fullAddress" className="mb-2">
      <Form.Control as="textarea" rows={3} placeholder="Full Address" />
    </Form.Group>

    <Row className="mb-2">
      <Col xs={12} md={6}>
        <Form.Group controlId="state" className="mb-2">
          <Form.Control type="text" placeholder="State" />
        </Form.Group>
      </Col>
      <Col xs={12} md={6}>
        <Form.Group controlId="city" className="mb-2">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
      </Col>
    </Row>

    {/* Product Details Section */}
    <Form.Group className="mb-2">
      <Form.Control type="text" placeholder="Product Details" readOnly />
    </Form.Group>

    <Row className="mb-2">
      <Col xs={12} md={6}>
        <Form.Group controlId="productCategory" className="mb-2">
          <Form.Control as="select" defaultValue="Select product category">
            <option disabled>Select product category</option>
            <option>Category 1</option>
            <option>Category 2</option>
            {/* Add more categories as needed */}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col xs={12} md={6}>
        <Form.Group controlId="selectProduct" className="mb-2">
          <Form.Control as="select" defaultValue="Select product">
            <option disabled>Select product</option>
            <option>Product 1</option>
            <option>Product 2</option>
            {/* Add more products as needed */}
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>

    <Form.Group controlId="messageCallReason" className="mb-2">
      <Form.Control as="textarea" rows={3} placeholder="Message / Call Reason" />
    </Form.Group>

    <Row className="mb-2">
      <Col xs={12} md={6}>
        <Form.Group controlId="warrantyStatus" className="mb-2">
          <Form.Control type="text" placeholder="Warranty Status" />
        </Form.Group>
      </Col>
      <Col xs={12} md={6}>
        <Form.Group controlId="date" className="mb-2">
          <Form.Control type="text" placeholder="dd-mm-yyyy --:--" />
        </Form.Group>
      </Col>
    </Row>

    <Button style={{background:'#506bff',color:'white'}} type="submit">
      Submit
    </Button>
  </Form>
</Container> 
        </div>
    )
}

export default ContactForm1
