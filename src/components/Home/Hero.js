import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import image2 from '../../Images/about.jpeg'; // Adjust the import path as necessary
import image3 from '../../Images/image3.jpg'; // Adjust the import path as necessary

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 75vh;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 20px;
  animation: ${fadeIn} 2s ease-in;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  z-index: 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1s ease-in;
  padding-top: 20px;
`;

const HeroText = styled.h1`
  font-size: 3.0em;
  margin: 0;
  color: ${props => props.color};

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const HeroSubText = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
  color: ${props => props.color};

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const images = [ image2, image3];
const texts = [
  {
    heroText: "WELCOME TO RABAX SOLAR ENERGY PVT LTD",
    color: "black" // Example color
  },
  {
    
    heroText: "EV CHARGING SOLUTIONS",
    color: "black" // Example color
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <HeroContainer>
      <HeroImage
        src={images[currentImageIndex]}
        alt="Hero"
        onClick={handleImageClick}
      />
      <TextContainer key={currentImageIndex}>
        <HeroText color={texts[currentImageIndex].color}>
          {texts[currentImageIndex].heroText}
        </HeroText>
        <HeroSubText color={texts[currentImageIndex].color}>
          {texts[currentImageIndex].heroSubText}
        </HeroSubText>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
