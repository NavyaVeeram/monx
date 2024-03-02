
import './App.css';

import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkVariantExample from './Components/Carousel/Carousel';
import Navbar1 from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import ContactForm from './Components/ContactForm/ContactForm';
import Maps from './Components/Maps/Maps';
function App() {
  return (
<>
<Navbar1 />
<Home />
<ContactForm />
<Maps />
 {/* <DarkVariantExample /> */}

<Footer /> 

</>
  );
}

export default App;
