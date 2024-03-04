import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Figure, Button } from 'react-bootstrap';
import CardsComponent from '../CardsComponent/CardsComponent';
import { Link } from 'react-router-dom';
const Home = () => {
  
  const backgroundImage = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: '100% 100vh',
    backgroundPosition: 'center',
    color: 'white', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '600px',
  };

  return (
    <>
 
   
      <Container fluid style={backgroundImage}>
        <Container className="text-center">
    
<h1 style={{textShadow:'2px 2px yellow '}} className='navtext'>WELCOME TO THE MONX GROUP PARADISE<br/>
RESORTS & HOTELS</h1>
<Button
      className='mt-4 explore_button'
      style={{
        backgroundColor: 'transparent',
        border: '1px solid aqua',
        color: 'aqua',
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'yellow'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      Explore More
    </Button>    </Container>
      </Container>
      <Container>
        <h1 style={{color:'red'}} className='text-center'>RESORT ADVENTURE
</h1>
</Container>
<Container>
  <div className='position-relative'>
  <img src='https://static.wixstatic.com/media/2fddf9_c28f8a56ebd8469094e33344b8e31a2e~mv2.jpg/v1/fill/w_1485,h_726,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2fddf9_c28f8a56ebd8469094e33344b8e31a2e~mv2.jpg' alt='homeimage' width='100%'/>
  <div className='position-absolute bottom-0 end-0 m-5'>

  <Button
      className='mt-4 explore_button'
      style={{
        backgroundColor: 'red',
        border: '1px solid red',
        color: 'white',
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'red'}
    >
     <Link as={Link} to='/booking' className='text-light text-decoration-none'>Book Now</Link>

    </Button> 
    </div>
  </div>
</Container>
<CardsComponent/>



   </>
  );
};

export default Home;
