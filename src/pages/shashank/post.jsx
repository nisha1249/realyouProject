import React, { useState } from 'react';

const MyComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://65.2.175.154:8000/user/usersignup/', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(formData)
        
      }
      
      );
      console.log("mydata.................",response)
      if (response.ok) {
        // Handle success response
        console.log('POST request successful');
      } else {
        // Handle error response
        console.error('POST request failed');
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error while making POST request:', error);
    }
  };

  return (
    <div>
        <h1>shashank</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default MyComponent;
