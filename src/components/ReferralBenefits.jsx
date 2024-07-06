import React, { useState } from 'react';

const ReferralBenefits = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleEnrolled = () => {
    setIsEnrolled(!isEnrolled);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [showModal, setShowModal] = useState(false);

  const handleReferNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            What Are The <span className="text-blue-500">Referral Benefits?</span>
          </h2>
        </div>

        <div className="flex justify-end mb-4 mr-48">
              <div className="flex items-center space-x-3 pr-30">
                <span className="text-gray-700 font-semibold">Enrolled</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={isEnrolled} onChange={toggleEnrolled} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
        
        <div className="flex justify-center align-center gap-9">
          {/* Sidebar */}
          <div className="bg-[#EFF2F7] border rounded-xl shadow-lg">
            <button className="w-full text-left font-semibold bg-[#1A73E8] py-4 text-white pl-2 rounded-t-xl">
              ALL PROGRAMS
            </button>
            <table className="w-full">
              <tbody>
                {[
                  'PRODUCT MANAGEMENT',
                  'STRATEGY & LEADERSHIP',
                  'BUSINESS MANAGEMENT',
                  'FINTECH',
                  'SENIOR MANAGEMENT',
                  'DATA SCIENCE',
                  'DIGITAL TRANSFORMATION',
                  'BUSINESS ANALYTICS',
                ].map((item, index) => (
                  <tr key={item} className={index < 7 ? "border-b border-gray-300" : ""}>
                    <td className="py-2 px-4">
                      <button className="w-full text-left p-2 hover:bg-gray-200 rounded font-semibold">
                        {item}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Program List */}
          <div className="bg-white border rounded-xl shadow-lg relative">
           
            <table className="w-full border-separate border-spacing-0">
              <thead className="bg-[#1A73E859] rounded-t-xl">
                <tr>
                  <th className="py-4 px-4 text-left border-r-2 border-gray-400">Programs</th>
                  <th className="py-4 px-4 text-left border-r-2 border-gray-400">Referrer Bonus</th>
                  <th className="py-4 px-4 text-left">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Professional Certificate Program in Product Management', '₹ 7,000', '₹ 9,000'],
                  ['PG Certificate Program in Strategic Product Management', '₹ 9,000', '₹ 11,000'],
                  ['Executive Program in Data Driven Product Management', '₹ 10,000', '₹ 10,000'],
                  ['Executive Program in Product Management and Digital Transformation', '₹ 10,000', '₹ 10,000'],
                  ['Executive Program in Product Management', '₹ 10,000', '₹ 10,000'],
                  ['Advanced Certification in Product Management', '₹ 10,000', '₹ 10,000'],
                  ['Executive Program in Product Management and Project Management', '₹ 10,000', '₹ 10,000'],
                ].map(([program, referrerBonus, refereeBonus], index) => (
                  <tr key={index} className="border-b-2 border-gray-400">
                    <td className="py-4 px-4 flex items-center border-r-2 border-gray-400">
                      <img src="image4.png" alt="Icon" className="w-8 h-8 mr-2" />
                      {program}
                    </td>
                    <td className="py-2 px-4 border-r-2 border-gray-400">{referrerBonus}</td>
                    <td className="py-2 px-4">{refereeBonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Show More Dropdown */}
            <div className="absolute right-0 top-full mt-4">
              <button
                className="bg-[#3C4852] text-white py-2 px-6 rounded"
                onClick={toggleDropdown}
              >
                Show More
              </button>
              {isDropdownOpen && (
                <div className="bg-gray-100 border rounded p-2">
                  {/* Add content for the dropdown here */}
                  Course1
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Refer Now Button */}
        <div className="text-center mt-20">
          <button onClick={handleReferNowClick} className="bg-blue-500 text-white py-2 px-6 rounded">
            Refer Now
          </button>
        </div>
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

export default ReferralBenefits;
