import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const AdventureCard = ({ title, venue, meals, activities, imageUrl, buttonText }) => {
  return (
    <Card style={{ width: '300px', height: '600px' }}>
      <Card.Img variant="top" src={imageUrl} alt={title} style={{ height: '30%' }} />
      <Card.Body style={{ height: '70%', overflow: 'hidden' }}>
        <Card.Title>{title}</Card.Title>
        <Container>
          <Row>
            <Col>
              <p>{venue}</p>
              <p>{meals}</p>
              <p>{activities}</p>
              <p>{/* Add a fourth line of text here */}</p>
              <Button variant="primary">{buttonText}</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default AdventureCard;
