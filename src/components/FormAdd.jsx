import React, { useState } from 'react';
import axios from 'axios';
import getusers from '../api/index'
const Form = () => {
  const [appName, setAppName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', { appName, email, url });
      console.log(response.data); // Assuming your backend returns the saved user data
      setMessage('User data saved successfully!');
      setAppName('');
      setEmail('');
      setUrl('');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error saving user data!');
    }
  };

  return (
    <div>
      <h2>Enter User Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>App Name:</label>
          <input type="text" value={appName} onChange={(e) => setAppName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>URL:</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
