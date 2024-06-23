import React, {useEffect}from 'react';
import styled from 'styled-components';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Footer from './Footer';

const Container = styled.div`
  padding: 60px 20px;
  background-color: #fff;
  color: #333;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SubTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 15px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Paragraph = styled.p`
  font-size: 1em;
  margin-bottom: 15px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactMessage = styled.p`
  font-size: 1.2em;
  margin-top: 40px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ContactButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1em;
  color: #ffffff;
  background-color: #ff6f61;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e55a4f;
  }
`;

const SolarWaterHeater = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const handleContactButton = () => {
        navigate('/contact');
    };
  
    const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Container>
        <Title>Solar Water Heaters</Title>

        <Section>
          <SubTitle>What Is a Solar Water Heater System?</SubTitle>
          <Paragraph>
            Rabax excels in installing high-efficiency solar water heaters, offering an eco-friendly and cost-effective solution for your hot water needs. Our advanced systems harness solar energy to provide consistent and reliable hot water, significantly reducing energy bills and environmental impact. 
            Trust Rabax for seamless installation and maintenance, ensuring you enjoy sustainable hot water year-round.
          </Paragraph>
          <Image src="https://media.istockphoto.com/id/588255272/photo/water-boiler-with-solar-panels-on-roof-of-house.jpg?s=612x612&w=0&k=20&c=D1XAtgfUFcqsimurT-fhj-MbwWmgRJTTFMjm5vQt2y4=" alt="Solar Water Heater" />
        </Section>

        <ContactMessage>
          Have a question? Contact us today! We're looking forward to hearing from you.
        </ContactMessage>
        <ContactButton onClick={handleContactButton}>Contact Us</ContactButton>
        
      </Container>
      <Layout/>
      <Footer/>
    </div>
  );
};

export default SolarWaterHeater;
