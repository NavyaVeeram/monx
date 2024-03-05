import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='pt-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/2fddf9_c27e762331ef4ca6ba351aad27a95897~mv2.jpg/v1/fill/w_1485,h_959,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2fddf9_c27e762331ef4ca6ba351aad27a95897~mv2.jpg"
          alt="First slide"
          style={{height:'auto'}}
        />
        <Carousel.Caption className='text-white'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/2fddf9_9afd87868081439f805784cc523e3c8b~mv2.jpg/v1/fill/w_1897,h_959,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2fddf9_9afd87868081439f805784cc523e3c8b~mv2.jpg"
          alt="Second slide"
          style={{height:'auto'}}
        />
        <Carousel.Caption className='text-white'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/2fddf9_9afd87868081439f805784cc523e3c8b~mv2.jpg/v1/fill/w_1897,h_959,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2fddf9_9afd87868081439f805784cc523e3c8b~mv2.jpg"
          alt="Third slide"
          style={{height:'auto'}}
        />
        <Carousel.Caption className='text-white'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;