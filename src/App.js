import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkVariantExample from './Components/Carousel/Carousel';
import Navbar1 from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import ContactForm from './Components/ContactForm/ContactForm';
import Maps from './Components/Maps/Maps';
import GalleryBang from './Components/GalleryBanglore/GalleryBanglore';
import GallerySak from './Components/GallerySak/GallerySak';
import GalleryRama from './Components/GalleryRama/GalleryRama';
import MonxBanglore from './Components/MonxBanglore/MonxBanglore';
import MonxSakileshpur from './Components/MonxSakileshpur/MonxSakileshpur';
import MonxRam from './Components/MonxRam/MonxRam';
import MonxKun from './Components/MonxKun/MonxKun';
import OutBan from './Components/OutBan/OutBan';
import OutRam from './Components/Navbar/OutRam/OutRam';
import Camping from './Components/Camping/Camping';
import Corporate from './Components/Corporate/Corporate';
function App() {
  return (
    <>
      <Router>
        <Navbar1 />

        <Routes>
        <Route path="/" element={<DarkVariantExample />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/gallerybang" element={<GalleryBang />} />
          <Route path="/gallerysak" element={<GallerySak/>}/>
          <Route path="/galleryram" element={<GalleryRama/>}/>
          <Route path="/camping" element={<Camping/>}/>
          <Route path="/monxban" element={<MonxBanglore/>}/>
          <Route path="/monxsak" element={<MonxSakileshpur/>}/>
          <Route path="/monxram" element={<MonxRam/>}/>
          <Route path="/monxkun" element={<MonxKun/>}/>
          <Route path="/outban" element={<OutBan/>}/>
          <Route path="/outram" element={<OutRam/>}/>
          <Route path="/outsak" element={<Navbar1/>}/>
          <Route path="/corporate" element={<Corporate/>}/>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
