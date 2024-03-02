import React from 'react';

function Maps() {
  return (
    <iframe
    className='mt-5'
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32531.63922744166!2d82.86711782216531!3d18.321363148077314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3a4a4c298a218d%3A0x2b8de4f914b5f996!2sAraku%20Valley%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709277833557!5m2!1sen!2sin"
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
