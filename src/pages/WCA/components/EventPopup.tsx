import React, { useState, useEffect } from 'react';
import bannerImg from "../../../assets/wca/wca-summit-banner.png";
import { FaMinus, FaChevronUp } from 'react-icons/fa'; // Import icons from react-icons

const EventPopup: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  useEffect(() => {
    const seenPopup = localStorage.getItem('seenPopup');
    if (seenPopup) {
      setIsMinimized(true);
    }
  }, []);

  const handleToggle = () => {
    setIsMinimized(!isMinimized);
    if (!isMinimized) {
      localStorage.setItem('seenPopup', 'true');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" style={{zIndex: 5}}>
      {isMinimized ? (
        <div
          onClick={handleToggle}
          className="bg-blue-500 text-white p-3 rounded cursor-pointer flex items-center space-x-2 shadow-lg"
        >
          <FaChevronUp />
          <span className="font-semibold">2024 WCA Summit</span>
        </div>
      ) : (
        <div className="bg-white shadow-2xl rounded-lg p-6 w-96 md:w-[28rem]"> {/* Increased width */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">2024 WCA Summit</h3>
            <button
              onClick={handleToggle}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaMinus size={18} /> {/* Minimize icon with size */}
            </button>
          </div>
          {/* Event Banner */}
          <div className="mb-4">
            <img 
              src={bannerImg}
              alt="Event Banner"
              className="w-full h-32 object-cover rounded-t-lg"
              style={{objectFit: "contain"}}
            />
          </div>

          <div className="text-gray-700 text-base leading-relaxed">
            <p className="mb-3">
              <strong>Theme:</strong> CYBERSAFETY: EMPOWERING FAMILIES IN THE DIGITAL AGE
            </p>
            <p className="mb-3">
              <strong>Date:</strong> 10th October, 2024
            </p>
            <p className="mb-3">
              <strong>Venue:</strong> NAF Conference Centre & Suites, Suite 231, Plot 307 Ahmadu Bello Way, Kado, Abuja
            </p>
            <p className="mb-4">
              <strong>Time:</strong> 9:00am
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScju5jvEAHdVA_GDXpD1aaPr3EbZYU-o56A6VGFlE6VEKzj_w/viewform?usp=pp_url"
              target="_blank"
              className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
            >
              Book your seat now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPopup;
