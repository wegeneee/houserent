import React, { useState } from 'react';
import axios from 'axios';

function AddRoom() {
  const [formData, setFormData] = useState({
    image: '',
    address: '',
    floorLevel: '',
    houseNumber: '',
    rentPerMonth: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log the form data
    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
      const response = await axios.post('http://localhost:5000/api/property/addRoom', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      alert('Room added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add room.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123 Main St, Cityville"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Floor Level</label>
            <input
              type="text"
              name="floorLevel"
              value={formData.floorLevel}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="2nd Floor"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">House Number</label>
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="A-101"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rent Per Month</label>
            <input
              type="number"
              name="rentPerMonth"
              value={formData.rentPerMonth}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Room
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRoom;