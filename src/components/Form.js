// import React from 'react'
// import './FormStyles.css'

// const Form = () => {
//   return (
//     <div className='form'>
//         <form>
//             <label>Your Name</label>
//             <input types='text'></input>
//             <label>Email</label>
//             <input types='email'></input>
//             <label>Subject</label>
//             <input types='text'></input>
//             <label>Details</label>
//             <textarea rows='6' placeholder='Type a short message here' />
//             <button className='btn'>Submit</button>
//         </form>
      
//     </div>
//   )
// }

// export default Form
import React, { useState } from 'react';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          id='subject'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
        />

        <label htmlFor='message'>Details</label>
        <textarea
          rows='6'
          id='message'
          name='message'
          placeholder='Type a short message here'
          value={formData.message}
          onChange={handleChange}
        />

        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;


