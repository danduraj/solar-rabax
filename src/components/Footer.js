import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  font-family: 'Arial, sans-serif';
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const FooterLink = styled.a`
  color: #f39c12;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>RABAX SOLAR ENERGY PRIVATE LIMITED</FooterTitle>
        
      </FooterSection>
      <FooterSection>
        <FooterText>Phone No- <FooterLink href="tel:+917680012686">7680012686</FooterLink></FooterText>
        <FooterText>Email Id- <FooterLink href="mailto:support@rabaxsolarenergy.com">support@rabaxsolarenergy.com</FooterLink></FooterText>
        {/*<FooterText>Whatsapp – <FooterLink href="https://wa.me/917680012686">7680012686</FooterLink></FooterText>*/}
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
