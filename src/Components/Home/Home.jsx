import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Figure, Button } from 'react-bootstrap';
import CardsComponent from '../CardsComponent/CardsComponent';
import BookNowForm from '../BookNow/BookNow';

const Home = () => {
  
  const backgroundImage = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: '100% 100vh',
    backgroundPosition: 'center',
    color: 'white', // Change the text color based on your preference
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '600px', // Set a minimum height for the container
  };

  return (
    <>
 
   
      <Container fluid style={backgroundImage}>
        <Container className="text-center">
    
<h1 style={{textShadow:'2px 2px yellow '}} className='navtext'>WELCOME TO THE MONX GROUP PARADISE<br/>
RESORTS & HOTELS</h1>
          <Button className='mt-4 Button' style={{background:'transparent',borderColor:'aqua',padding:'10px'}}>Explore More</Button>
        </Container>
      </Container>
      <Container>
        <h1 style={{color:'red'}} className='text-center'>RESORT ADVENTURE
</h1>
</Container>

<CardsComponent/>

<BookNowForm/>

   </>
  );
};

export default Home;
