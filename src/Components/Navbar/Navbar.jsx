import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary  fixed-top p-4">
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'green', fontWeight: 'bold' }}>The Monx group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{color:'red',fontWeight:'bold'}}>Home</Nav.Link>
            
        
            <NavDropdown    title={<span style={{ color: 'green', fontWeight: 'bold' }}>Our Resorts</span>}  id="basic-nav-dropdown" className='colo'>
              <NavDropdown.Item href="#action/3.1">The monx group -Banglore </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
           The monx group - Ramanagar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">The monx group - Sakleshpur</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                The monx group - Kundarapura
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown  title={<span style={{ color: 'green', fontWeight: 'bold' }}>Day outing</span>}   id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Day outing in banglore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Day outing in ramanagar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Day outing in Sakleshpur</NavDropdown.Item>
          
            </NavDropdown>
            <Nav.Link href="#camping" style={{color:'green',fontWeight:'bold'}}>Camping</Nav.Link>
            <Nav.Link href="#corporate" style={{color:'green',fontWeight:'bold'}}>Corporate outing</Nav.Link>
            <NavDropdown        title={<span style={{ color: 'green', fontWeight: 'bold' }}>Gallery</span>} >
              <NavDropdown.Item href="#action/3.1">Day out in Banglore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Day out in sakleshwar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Day out in Ramanagar</NavDropdown.Item>
       
            </NavDropdown>
            <Nav.Link href="#link" style={{color:'green',fontWeight:'bold'}}>Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;