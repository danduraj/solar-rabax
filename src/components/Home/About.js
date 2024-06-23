import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import about from '../../Images/about.jpeg'

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const AboutImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const AboutTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;

const AboutSubtitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #555555;
`;

const AboutText = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #666666;
  line-height: 1.6;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
  }

  .learn-more {
    background-color: #ff6f61;
    color: white;
  }

  .contact-us {
    background-color: white;
    color: #ff6f61;
    border: 1px solid #ff6f61;
  }
`;

const About = ({ scrollToFeatures }) => {
  const navigate = useNavigate();

  const handleContactButton = () => {
      navigate('/contact');
  };


  return (
    <AboutSection>
      <AboutContent>
        <AboutTitle>We Are Rabax Solar</AboutTitle>
        <AboutSubtitle>Transforming the way the world utilizes energy.</AboutSubtitle>
        <AboutText>
          At RABAX Solar Energy, our mission is to revolutionize energy consumption by providing innovative, sustainable, and cost-effective solar solutions. We are committed to empowering communities and businesses to transition to renewable energy, reducing their carbon footprint, and fostering a greener, more sustainable future for generations to come.
        </AboutText>
        <ButtonWrapper>
          <button className="learn-more" onClick={scrollToFeatures}>Learn More</button>
          <button className="contact-us" onClick={handleContactButton}>Contact Us</button>
        </ButtonWrapper>
      </AboutContent>
      <AboutImageWrapper>
        <img src={about} alt="Solar Panels"/>
      </AboutImageWrapper>
    </AboutSection>
  );
};

export default About;
