import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/multi-colored-paint-drops-splashing-abstract-background-generated-by-ai_188544-15630.jpg?t=st=1709272200~exp=1709275800~hmac=d110e3dfbd365a3a14d295d4d870dd4dd9a2ef2d88d3174ec4741bf4e7164fe4&w=1380"
          alt="First slide"
          style={{height:'500px'}}
        />
        <Carousel.Caption className='text-white'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509.jpg?t=st=1709272278~exp=1709275878~hmac=f17d390d012f60d1c6daff144027fd0cdced431777b087f339af1df5d593e950&w=1380"
          alt="Second slide"
          style={{height:'500px'}}
        />
        <Carousel.Caption className='text-white'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/abstract-multi-colored-illustration-nature-vibrant-beauty-generated-by-ai_188544-15591.jpg?t=st=1709272311~exp=1709275911~hmac=dfb60769a36db26d76e670cc722bf58308de1e68a07f6de93a4346285d215007&w=1380"
          alt="Third slide"
          style={{height:'500px'}}
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