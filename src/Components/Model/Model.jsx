import React, { useState } from 'react';
import './Model.css'; // Import your styles if needed

const Model = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <img
              src="https://example.com/your-image.jpg"
              alt="Modal Image"
              className="modal-image"
            />
          </div>
        </div>
      )}

      {/* The rest of your page content goes here */}
      <h1>Welcome to My Website</h1>
      <p>Other content...</p>
    </div>
  );
};

export default Model;
