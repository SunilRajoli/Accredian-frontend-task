// src/components/HowToRefer.jsx
import React, { useState } from 'react';

const HowToRefer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleReferNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <section className="bg-[#EEF5FF] py-12">
      <div className="container mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-8">
          How Do I <span className="text-blue-500">Refer?</span>
        </h2>
        
        {/* Background Image */}
        <div className="relative flex justify-center items-center">
          <img src="image3.png" alt="Background" className="w-full h-auto" />
          
          {/* First Circle Content */}
          <div className="absolute flex flex-col items-center" style={{ top: '30%', left: '16%' }}>
            <img src="/add_friend.png" alt="Icon 1" className="w-18 h-16" />
            <p className="mt-6 text-center" style={{ 
              width: '193px', 
              height: '88px', 
              fontFamily: 'Roboto', 
              fontSize: '18px', 
              fontWeight: '400', 
              lineHeight: '22px', 
              textAlign: 'center' 
            }}>
              Submit referrals easily via our website’s referral section.
            </p>
          </div>
          
          {/* Second Circle Content */}
          <div className="absolute flex flex-col items-center" style={{ top: '30%', left: '44%' }}>
            <img src="image1.png" alt="Icon 2" className="w-16 h-16" />
            <p className="mt-6 text-center" style={{ 
              width: '193px', 
              height: '88px', 
              fontFamily: 'Roboto', 
              fontSize: '18px', 
              fontWeight: '400', 
              lineHeight: '22px', 
              textAlign: 'center' 
            }}>
              Earn rewards once your referral joins an Accredian program.
            </p>
          </div>
          
          {/* Third Circle Content */}
          <div className="absolute flex flex-col items-center" style={{ top: '30%', left: '71%' }}>
            <img src="image2.png" alt="Icon 3" className="w-16 h-16" />
            <p className="mt-6 text-center" style={{ 
              width: '193px', 
              height: '88px', 
              fontFamily: 'Roboto', 
              fontSize: '18px', 
              fontWeight: '400', 
              lineHeight: '22px', 
              textAlign: 'center' 
            }}>
              Both parties receive a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>

        <button onClick={handleReferNowClick} className="mt-8 bg-blue-500 text-white py-2 px-6 rounded">
          Refer Now
        </button>
      </div>

      {/* Referral Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg" style={{ width: '550px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h3 className="text-2xl font-bold mb-4">Referral Form</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="yourName" className="block text-gray-700">Your Name</label>
                <input type="text" id="yourName" className="w-full border rounded py-2 px-3" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="yourEmail" className="block text-gray-700">Your Email</label>
                <input type="email" id="yourEmail" className="w-full border rounded py-2 px-3" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="yourPhone" className="block text-gray-700">Your Phone Number</label>
                <input type="text" id="yourPhone" className="w-full border rounded py-2 px-3" placeholder="Your Phone Number" />
              </div>
              <div className="mb-4">
                <label htmlFor="refereeName" className="block text-gray-700">Referee Name</label>
                <input type="text" id="refereeName" className="w-full border rounded py-2 px-3" placeholder="Referee Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="refereeEmail" className="block text-gray-700">Referee Email</label>
                <input type="email" id="refereeEmail" className="w-full border rounded py-2 px-3" placeholder="Referee Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="refereePhone" className="block text-gray-700">Referee Phone Number</label>
                <input type="text" id="refereePhone" className="w-full border rounded py-2 px-3" placeholder="Referee Phone Number" />
              </div>
              <div className="mb-4">
                <label htmlFor="courseInterested" className="block text-gray-700">Course Interested In</label>
                <input type="text" id="courseInterested" className="w-full border rounded py-2 px-3" placeholder="Course Interested In" />
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

export default HowToRefer;
