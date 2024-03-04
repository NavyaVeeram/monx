// GalleryBang.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Bang1 from '../GalleryBang/Bang1.jpeg';
import Bang2 from '../GalleryBang/Bang2.jpeg';
import Bang3 from '../GalleryBang/Bang3.jpeg';
import Bang4 from '../GalleryBang/Bang4.jpeg';
import Bang5 from '../GalleryBang/Bang5.jpeg';

const GalleryBang = () => {
  const imageSets = [
    [Bang1, Bang2, Bang3],
    [Bang4, Bang5, Bang1],
    [Bang2, Bang3, Bang4],
  ];

  return (
    <Container>
      {imageSets.map((imageUrls, setIndex) => (
        <Row key={setIndex}>
          {imageUrls.map((url, index) => (
            <Col key={index} xs={12} md={setIndex === 0 ? (index === 0 ? 6 : 3) : 4} lg={setIndex === 0 ? (index === 0 ? 6 : 3) : 4} className='p-2'>
              <div className="image-container">
                <img src={url} alt={`Set ${setIndex + 1} - Image ${index + 1}`} className="img-fluid w-100" style={{height:'50vh'}} />
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default GalleryBang;
