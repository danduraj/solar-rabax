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

const SolarRoofTop = () => {
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
        <Title>Solar Rooftop</Title>

        <Section>
          <SubTitle>What Is a Solar Rooftop System?</SubTitle>
          <Paragraph>
            Rabax Solar Energy specializes in innovative solar rooftop installations, providing efficient and sustainable energy solutions for homes and businesses. Our cutting-edge technology and expert service ensure maximum energy savings and environmental impact.
          </Paragraph>
          
        </Section>

        <Section>
          <SubTitle>Residential Solar Mounting</SubTitle>
          <Paragraph>
            Rabax offers top-tier rooftop residential solar installations ranging from 1 kW to 5 kW, perfect for powering homes efficiently and sustainably. Our customized solutions are designed to meet individual energy needs, reduce electricity bills, and promote eco-friendly living. With Rabax, homeowners can harness the power of the sun with reliable and cost-effective solar energy systems.
          </Paragraph>
          <Image src='https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_1280.jpg' alt="Solar Rooftop" />
        </Section>

        <Section>
          <SubTitle>Commercial Solar Mounting</SubTitle>
          <Paragraph>
            Rabax specializes in rooftop commercial solar installations, starting from 5 kW and scaling up to meet any customer requirement. Our tailored solutions help businesses significantly reduce operational costs and carbon footprint. With a focus on reliability and efficiency, Rabax ensures your commercial properties are powered sustainably, contributing to a greener future while enhancing energy independence.
          </Paragraph>
          <Image src='https://media.istockphoto.com/id/1170098138/photo/solar-panels-fields-on-the-green-hills.jpg?s=612x612&w=0&k=20&c=xYjwuTPHyIHsRzj8NAABoGfE5ZpLq2zJbfXi-oJrqQo=' alt="Solar Rooftop" />
        </Section>

        <ContactMessage>
          Have a question? Contact us today! We're looking forward to hearing from you.
        </ContactMessage>
        <ContactButton  onClick={handleContactButton}> Contact Us</ContactButton>
      </Container>
      <Layout/>
      <Footer/>
    </div>
  );
};

export default SolarRoofTop;
