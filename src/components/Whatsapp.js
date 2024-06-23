// WhatsAppIcon.jsx

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = ({ phoneNumber }) => {
  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '35px',
        right: '35px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25d366',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        zIndex: '1000', // Ensure it's above other content
      }}
      onClick={handleClick}
    >
      <FaWhatsapp size={40} style={{ color: '#ffffff' }} />
    </div>
  );
};

export default WhatsAppIcon;
