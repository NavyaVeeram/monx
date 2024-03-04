import React from 'react';

function Maps() {
  return (
    <iframe
    className='mt-5'
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3788.7983694061886!2d83.1002396751855!3d18.265062482779697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDE1JzU0LjIiTiA4M8KwMDYnMTAuMSJF!5e0!3m2!1sen!2sin!4v1709387633645!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Maps;
