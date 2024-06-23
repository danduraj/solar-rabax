import React, {useEffect} from 'react';
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

const SolarOperationMaintenance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const navigate = useNavigate(); 

      const handleContactButton = () => {
        navigate('/contact');
    };
  

  return (
    <div>
      <Header />
      <Container>
        <Title>Solar Operation & Maintenance</Title>

        <Section>
          <SubTitle>What Is Solar Operation & Maintenance?</SubTitle>
          <Paragraph>
            Rabax is your trusted partner in solar operation and maintenance, ensuring optimal performance and longevity of your solar systems. Our expert team provides comprehensive services, including regular inspections, cleaning, and repairs, to maximize efficiency and energy output. With Rabax, you can count on reliable and seamless solar operations, safeguarding your investment and contributing to a sustainable future.
          </Paragraph>
          <Image src="https://cdn.pixabay.com/photo/2020/10/24/07/29/man-5680696_1280.jpg" />
        </Section>

        <ContactMessage>
          Have a question? Contact us today! We're looking forward to hearing from you.
        </ContactMessage>
        <ContactButton onClick={handleContactButton}>Contact Us</ContactButton>
      </Container>
      <Layout />
      <Footer/>
    </div>
  );
};

export default SolarOperationMaintenance;
