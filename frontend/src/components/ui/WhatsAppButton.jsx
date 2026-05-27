import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '919999999999'; // Replace with actual number
  const message = encodeURIComponent(
    'Hello Bright Spot Educational Solutions, I would like to know more about admissions and universities.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-accent-navy text-sm font-medium rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
    </a>
  );
};

export default WhatsAppButton;
