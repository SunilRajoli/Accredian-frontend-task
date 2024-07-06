import React, { useState } from 'react';
import axios from 'axios';

const Sections = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
    courseInterested: ''
  });

  const handleReferNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (formData) => {
    try {
      // Replace with your backend URL
      const response = await axios.post('http://localhost:5000/api/referral', formData);
  
      // Handle success (optional)
      console.log('Server response:', response.data);
    } catch (error) {
      // Handle error (optional)
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section>
      {/* Navigation */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-center">
          <nav
            className="flex justify-center items-center space-x-8 py-4"
            style={{
              width: '797px',
              height: '63px',
              borderRadius: '38px',
              backgroundColor: '#1A73E81C',
            }}
          >
            <a href="#" className="text-gray-700 hover:text-blue-500">Refer</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Benefits</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">FAQs</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Support</a>
          </nav>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex justify-center py-12">
        <div
          className="flex items-center justify-center"
          style={{
            width: '1160px',
            height: '574px',
            borderRadius: '29px',
            backgroundColor: '#EEF5FF'
          }}
        >
          <div className="flex items-center w-full p-12">
            <div className="w-1/2">
              <h2 className="text-7xl font-bold text-gray-900">Let’s Learn <br />& Earn</h2>
              <p className="mt-4 text-2xl">Get a chance to win<br /> up-to <span className="text-blue-500">Rs. 15,000</span></p>
              <button onClick={handleReferNowClick} className="mt-16 bg-blue-500 text-white py-3 px-6 rounded">Refer Now</button>
            </div>
            <div className="w-3/4 flex justify-center">
              <img src="/hero-image.png" alt="Refer" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Referral Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg" style={{ width: '550px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h3 className="text-2xl font-bold mb-4">Referral Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="yourName" className="block text-gray-700">Your Name</label>
                <input type="text" id="yourName" name="yourName" className="w-full border rounded py-2 px-3" placeholder="Your Name" onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="yourEmail" className="block text-gray-700">Your Email</label>
                <input type="email" id="yourEmail" name="yourEmail" className="w-full border rounded py-2 px-3" placeholder="Your Email" onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="yourPhone" className="block text-gray-700">Your Phone Number</label>
                <input type="text" id="yourPhone" name="yourPhone" className="w-full border rounded py-2 px-3" placeholder="Your Phone Number" onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="refereeName" className="block text-gray-700">Referee Name</label>
                <input type="text" id="refereeName" name="refereeName" className="w-full border rounded py-2 px-3" placeholder="Referee Name" onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="refereeEmail" className="block text-gray-700">Referee Email</label>
                <input type="email" id="refereeEmail" name="refereeEmail" className="w-full border rounded py-2 px-3" placeholder="Referee Email" onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="refereePhone" className="block text-gray-700">Referee Phone Number</label>
                <input type="text" id="refereePhone" name="refereePhone" className="w-full border rounded py-2 px-3" placeholder="Referee Phone Number" onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="courseInterested" className="block text-gray-700">Course Interested In</label>
                <input type="text" id="courseInterested" name="courseInterested" className="w-full border rounded py-2 px-3" placeholder="Course Interested In" onChange={handleChange} />
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" onClick={handleCloseModal} className="bg-gray-300 py-2 px-4 rounded">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sections;
