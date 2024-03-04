import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    packageName: '',
    travelDate: '',
    adults: 1,
    children: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdultsChange = (action) => {
    setFormData((prevData) => ({
      ...prevData,
      adults: action === 'add' ? prevData.adults + 1 : Math.max(prevData.adults - 1, 1),
    }));
  };

  const handleChildrenChange = (action) => {
    setFormData((prevData) => ({
      ...prevData,
      children: action === 'add' ? prevData.children + 1 : Math.max(prevData.children - 1, 0),
    }));
  };

  const handleTotal = () => {
    // You can customize the logic for calculating the total as needed
    return formData.adults + formData.children;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className='w-50 mx-auto border border-primary rounded p-2 m-4' >
      <h4>payment details</h4>
      <div className='d-flex  m-2'>
        <div className='w-50'><label htmlFor="fullName">Full Name:</label></div>
        <div className='w-50'><input type="text" id="fullName" name="fullName" className='form-control' value={formData.fullName} onChange={handleChange} /></div>
      </div>

      <div className='d-flex m-2' >
        <div className='w-50'><label htmlFor="email">Email:</label></div>
       <div className='w-50'> <input type="text" id="email" name="email" className='form-control' value={formData.email} onChange={handleChange} /></div>
      </div>
      <div className='d-flex m-2'>
       <div className='w-50'> <label htmlFor="phone">Phone:</label></div>
       <div className='w-50'> <input type="text" id="phone" name="phone" className='form-control' value={formData.phone} onChange={handleChange} /></div>
      </div>
      <div className='d-flex m-2'>
        <div className='w-50'><label htmlFor="packageName">Package Name:</label></div>
        <div className='w-50'><Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </div></div>
      <div className="d-flex m-2">
         <div className='w-50'> <label htmlFor="travelDate">Travel Date:</label></div>
          <div className='w-50'><input type="date" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleChange} className="form-control" /></div>
        </div>


      <div className="d-flex m-2">
        <div className='w-50'>
          <label htmlFor="adults">Adults:</label>
        </div>
        <div className="w-50 quantity-control">
          <button type="button" onClick={() => handleAdultsChange('subtract')} className="btn btn-secondary">
            -
          </button>
          <span className="quantity">{formData.adults}</span>
          <button type="button" onClick={() => handleAdultsChange('add')} className="btn btn-secondary">
            +
          </button>
        </div>
      </div>

      <div className="d-flex m-2">
        <div className='w-50'>
          <label htmlFor="children">Children:</label>
        </div>
        <div className="w-50 quantity-control">
          <button type="button" onClick={() => handleChildrenChange('subtract')} className="btn btn-secondary">
            -
          </button>
          <span className="quantity">{formData.children}</span>
          <button type="button" onClick={() => handleChildrenChange('add')} className="btn btn-secondary">
            +
          </button>
        </div>
      </div>

      <button type="button" className="btn btn-primary" onClick={() => {}}>{`Get Total: ${handleTotal()}`}</button>
    </Form>
  );
};

export default BookingForm;
