import React, { useEffect, useState } from "react";
import { showToast, ToastNotifications } from "./Toast";

const HooksComp = () => {
    // Form state
    const [formData, setFormData] = useState({
        username: '',
        email: '',
      });
      const [errors, setErrors] = useState({});
    
      // State for API data
      const [userData, setUserData] = useState(null);
      const [loading, setLoading] = useState(false);
    
      // Handle form change
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Validate form
      const validateForm = () => {
        let formErrors = {};
        if (!formData.username) formErrors.username = 'Username is required';
        if (!formData.email) formErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
        
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
      };
    
      // Handle form submit
      const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
          showToast('Form has errors. Please fix them.', 'error');
          return;
        }
    
        showToast('Form submitted successfully!', 'success');
        fetchData();  // Fetch data after successful form submission
      };
    
      // Fetch data from API on component mount
      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
          setUserData(response.data);
          showToast('Data fetched successfully!', 'success');
        } catch (error) {
          showToast('Error fetching data.', 'error');
        } finally {
          setLoading(false);
        }
      };
  return (
    <>
   <div>
      <h1>React Hooks Assignment</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display API Data */}
      <h2>User Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData && (
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
          </div>
        )
      )}

      <ToastNotifications />
    </div>
    </>
  );
};

export default HooksComp;
