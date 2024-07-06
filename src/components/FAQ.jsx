import React, { useState } from 'react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setSelectedQuestion(selectedQuestion === question ? null : question);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="flex flex-col space-y-4 ml-48 w-60">
            <button className="bg-gray-200 py-4 px-4 rounded-lg shadow-md text-[#1A73E8]">Eligibility</button>
            <button className="bg-gray-200 py-4 px-4 rounded-lg shadow-md">How To Use?</button>
            <button className="bg-gray-200 py-4 px-4 rounded-lg shadow-md">Terms & Conditions</button>
          </div>
          <div className="flex justify-between items-center w-full max-w-3xl mx-auto">
          <div className="flex flex-col space-y-4">
            <div
              className="w-full bg-gray-100 py-8 text-[#1A73E8] px-4 rounded-md cursor-pointer mr-3"
              onClick={() => toggleQuestion('q1')}
            >
              <h3 className="text-md font-semibold">
                Do I need to have prior Product Management and Project Management experience to enroll in the program?
              </h3>
              {selectedQuestion === 'q1' && (
                <p className="mt-2 text-gray-700 border-l-4 border-blue-500 pl-4">
                  No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
                </p>
              )}
            </div>

            <div
              className="w-full bg-gray-100 py-4 px-6 rounded-lg cursor-pointer flex-1"
              onClick={() => toggleQuestion('q2')}
            >
              <h3 className="text-md font-semibold">
                What is the minimum system configuration required?
              </h3>
              {selectedQuestion === 'q2' && (
                <p className="mt-2 text-gray-700 border-l-4 border-blue-500 pl-4">
                  {/* Add the answer for this question here */}
                </p>
              )}
            </div>
          </div>
        </div>
        </div>
        
        

        <div className="bg-blue-500 text-white py-6 mt-12 w-full rounded-lg flex justify-around max-w-6xl mx-auto">
            <img src="image5.png" alt="" style={{width: 80}}/>
            <div className='flex flex-col text-left text-white'>
                <h3 className="text-2xl font-semibold mb-1">Want to delve deeper into the program?</h3>
                <p className="mb-4">Share your details to receive expert insights from our program team!</p>
            </div>
          <button className="bg-white text-blue-500 px-6 w-22 mt-4 h-12 rounded-lg shadow-md">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
