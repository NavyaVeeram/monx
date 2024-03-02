import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary  fixed-top p-4">
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'green', fontWeight: 'bold' }}>The Monx group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/' style={{color:'red',fontWeight:'bold'}}>Home</Nav.Link>
            
        
            <NavDropdown    title={<span style={{ color: 'green', fontWeight: 'bold' }}>Our Resorts</span>}  id="basic-nav-dropdown" className='colo'>
              <NavDropdown.Item href="#action/3.1"><Nav.Link as={Link} to="/monxban" style={{color:'green',fontWeight:'bold'}}>The Monx Group Banglore</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Nav.Link as={Link} to="/monxram" style={{color:'green',fontWeight:'bold'}}>The monx group - Ramanagar</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Nav.Link as={Link} to="/monxsak" style={{color:'green',fontWeight:'bold'}}>The monx group - Sakleshpur</Nav.Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <Nav.Link as={Link} to="/monxkun" style={{color:'green',fontWeight:'bold'}}>The monx group - Kundarapura</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown  title={<span style={{ color: 'green', fontWeight: 'bold' }}>Day outing</span>}   id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1"><Nav.Link as={Link} to="/outban" style={{color:'green',fontWeight:'bold'}}>Day outing in banglore</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Nav.Link as={Link} to="/outram" style={{color:'green',fontWeight:'bold'}}>Day outing in ramanagar</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Nav.Link as={Link} to="/outsak" style={{color:'green',fontWeight:'bold'}}>Day outing in Sakleshpur</Nav.Link></NavDropdown.Item>
          
            </NavDropdown>
            <Nav.Link as={Link} to="/camping" style={{color:'green',fontWeight:'bold'}}>Camping</Nav.Link>
            <Nav.Link as={Link} to="/corporate" style={{color:'green',fontWeight:'bold'}}>Corporate outing</Nav.Link>
            <NavDropdown   title={<span style={{ color: 'green', fontWeight: 'bold' }}>Gallery</span>} >
              <NavDropdown.Item href="#action/3.1"> <Nav.Link as={Link} to="/gallerybang" style={{color:'green',fontWeight:'bold'}}>Day out in Banglore</Nav.Link>
</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Nav.Link as={Link} to="/gallerysak" style={{color:'green',fontWeight:'bold'}}>Day Out In Sakleshwar</Nav.Link>
              </NavDropdown.Item>
              <Nav.Link as={Link} to="/galleryram" style={{color:'green',fontWeight:'bold'}}>Day Out In Ramanager</Nav.Link>
       
            </NavDropdown>
            <Nav.Link as={Link} to="/contactform" style={{color:'green',fontWeight:'bold'}}>Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;