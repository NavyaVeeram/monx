import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar/Navbar';
import ContactForm from './Components/ContactForm/ContactForm';

import GallerySak from './Components/GallerySak/GallerySak';
import GalleryRama from './Components/GalleryRama/GalleryRama';
import MonxBanglore from './Components/MonxBanglore/MonxBanglore';
import MonxSakileshpur from './Components/MonxSakileshpur/MonxSakileshpur';
import MonxRam from './Components/MonxRam/MonxRam';
import MonxKun from './Components/MonxKun/MonxKun';
import OutRam from './Components/OutRam/OutRam';
import Camping from './Components/Camping/Camping';
import Corporate from './Components/Corporate/Corporate';
import OutSak from './Components/OutSak/OutSak';
import GalleryBang from './Components/GalleryBanglore/GalleryBanglore';
import Home from './Components/Home/Home';
import BookingForm from './Components/BookNow/BookNow';
import DayoutingBan from './Components/Dayouting/DayoutingBan';
import { Packages } from './Components/Dayouting/DayoutPackages/DayoutPackages';
import DayoutingSak from './Components/Dayouting/DayoutingSak';
import DayoutingRama from './Components/Dayouting/DayoutingRama';

function App() {
  return (
    <>
      <Router>
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/gallerybang" element={<GalleryBang/>}/>
          <Route path="/gallerysak" element={<GallerySak/>}/>
          <Route path="/galleryram" element={<GalleryRama/>}/>
          <Route path="/camping" element={<Camping/>}/>
          <Route path="/monxban" element={<MonxBanglore/>}/>
          <Route path="/monxsak" element={<MonxSakileshpur/>}/>
          <Route path="/monxram" element={<MonxRam/>}/>
          <Route path="/monxkun" element={<MonxKun/>}/>
          <Route path="/outban" element={<DayoutingBan/>}/>
          <Route path='/outsak' element={<DayoutingSak/>}/>
          <Route path='/outram' element={<DayoutingRama/>}/>
          <Route path="/packages" element={<Packages/>}/>
          <Route path="/corporate" element={<Corporate/>}/>
          <Route path="/booking" element={<BookingForm/>}/>
     
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
