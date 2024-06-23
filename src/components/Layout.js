// Layout.jsx

import React from 'react';
import WhatsAppIcon from './Whatsapp';

const Layout = ({ children }) => {
    const phoneNumber = '7680012686';// Replace with your WhatsApp number

  return (
    <div>
      {children}
      <WhatsAppIcon phoneNumber={phoneNumber} />
    </div>
  );
};

export default Layout;
