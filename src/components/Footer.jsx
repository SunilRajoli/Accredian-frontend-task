import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-6 flex justify-center items-center">
      <div className="w-[1040px] h-[731.88px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-12 mr-4" /> {/* Adjust the height and margin as needed */}
          </div>
          <div className="text-right mr-10">
            <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-gray-400 mt-1">Speak with our Learning Advisor</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between">
            {/* Programs Section */}
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              {[
                'Data Science & AI',
                'Product Management',
                'Business Analytics',
                'Digital Transformation',
                'Business Management',
                'Project Management',
                'Strategy & Leadership',
                'Senior Management',
                'Fintech',
              ].map((program) => (
                <div key={program} className="flex justify-between items-center py-3">
                  <span>{program}</span>
                  <span className="font-bold text-xl ml-32">+</span>
                </div>
              ))}
            </div>

            {/* Contact Us Section */}
            <div className=''>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p>Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="text-blue-500">admissions@accredian.com</a></p>
              <p>Email us (For Product Management Queries): <a href="mailto:pmp@accredian.com" className="text-blue-500">pmp@accredian.com</a></p>
              <p>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
              <p>Product Management Admission Helpline: +91 9625811095</p>
              <p>Enrolled Student Helpline: +91 7699322507</p>
              <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,<br /> Haryana 122015</p>

              {/* Why Accredian Section */}
              <div className="mt-4">
                <h4 className="font-bold">Why Accredian</h4>
                <p className='font-semibold mb-4'>Follow Us</p>
                <div className="flex space-x-4 font-semibold">
                  <a href="https://www.facebook.com/" className="text-blue-500"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="https://www.linkedin.com/" className="text-blue-500"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="https://x.com/i/flow/login" className="text-blue-500"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="https://www.youtube.com/" className="text-blue-500"><FontAwesomeIcon icon={faYoutube} /></a>
                  <a href="https://www.instagram.com/" className="text-blue-500"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>

            {/* Accredian Links Section */}
            <div>
              <h4 className="font-bold mb-4">Accredian</h4>
              <ul>
                <li><a href="#" className="hover:text-blue-500">About</a></li>
                <li><a href="#" className="hover:text-blue-500">Career</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500">Admission Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Referral Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500">Master FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-gray-700 pt-2">
          <p>© 2024 Accredian. A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
      {/* Chat/Call Icon */}
      <div className="fixed bottom-4 right-4 p-2 rounded-full shadow-lg hover:bg-blue-700 cursor-pointer">
        <img src="image6.png" alt="Chat/Call Icon" className="h-10 w-10" />
      </div>
    </footer>
  );
};

export default Footer;
