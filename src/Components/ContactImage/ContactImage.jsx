import React from 'react';
import bg from '../Images/bg.jpeg';
import './ContactImage.css'; // Create a CSS file for styling

function ContactImage() {
  return (
    <div className="contact-image-container">
      <img src={bg} alt="bg-image" width="100%" height="auto" className='img-fluid'/>
      <div className="centered-text">
        <p className='text-sm text-md text-lg text-xl'>Sharing Address With Nature</p>
      </div>
    </div>
  );
}

export default ContactImage;
