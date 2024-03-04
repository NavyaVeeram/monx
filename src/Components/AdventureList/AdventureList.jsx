import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdventureCard from '../AdventuresCard/AdventuresCard';

const AdventureList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AdventureCard
            title="WV Adventure Retreat, Bangalore"
            venue="Wild Valley Adventure Retreat, Bangalore. Just 20 KM from Banashankari, on Kanakapura Road."
            meals="Meals Inclusions- Hi-Tea with Snacks, Dinner & Breakfast."
            activities="Activities- Bonfire With Music, Trekking, Zipline, Raindance, Swimming Pool & 10 More Adventure Activities."
            imageUrl="url_to_your_image_1.jpg"
            buttonText="Book Now"
          />
        </Col>
        <Col>
          <AdventureCard
            title="WV Aclat Meadows, Sakleshpur"
            venue="Wild Valley Aclat Meadows, Near Sakleshpur"
            meals="Meals Inclusions- Hi-Tea with Snacks, Dinner & Breakfast."
            activities="Activities- Bonfire With Music,Sky Cycling, Superman Zipline."
            imageUrl="url_to_your_image_2.jpg"
            buttonText="Book Now"
          />
        </Col>
        <Col>
          <AdventureCard
            title="WV Mountain Bear, Ramanagara"
            venue="Wild Valley Mountain Bear, In Ramanagara."
            meals="Meals Inclusions- Hi-Tea with Snacks, Dinner and Breakfast."
            activities="Activities- Bonfire With Music, Burma Bridge, Sky Cycling, Superman Zipline and Rope Activities."
            imageUrl="url_to_your_image_3.jpg"
            buttonText="Book Now"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdventureList;
