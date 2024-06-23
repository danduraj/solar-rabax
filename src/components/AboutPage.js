import React from 'react';
import styled from 'styled-components';
import {
  FaLeaf,
  FaLightbulb,
  FaCheckCircle,
  FaHandshake,
  FaUsers,
  FaMedal,
  FaHandHoldingHeart,
  FaCogs,
  FaRegSmile,
  FaShieldAlt,
  FaSolarPanel,
  FaHandHoldingUsd,FaRocket,FaBrain,FaIndustry,
  
} from 'react-icons/fa';
import { AiOutlineDollarCircle, AiOutlineRise } from 'react-icons/ai';
import {  GiMoneyStack, GiHandTruck, GiTeacher, GiSolarPower,GiWindTurbine,GiElectric,GiScissors } from 'react-icons/gi';
import { MdEco,  MdPublic,MdOutlinePeopleAlt,MdEnergySavingsLeaf, MdRecycling, MdHandshake,  MdElectricCar } from 'react-icons/md';
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';


const AboutPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Arial, sans-serif';
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #666;
`;

const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueItem = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ddd;
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
  color: #f39c12;
`;

const IconTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  margin-top: 0px;
`;

const AboutPage = () => {
  return (
    <div>
        <Header/>
    <AboutPageContainer>
      <Section>
        <Title>About Us</Title>
        <Paragraph>
          At RABAX Solar Energy, we are dedicated to transforming the way the world utilizes energy. Our mission is to provide innovative, sustainable, and cost-effective solar energy solutions that empower communities and businesses to embrace a greener future. With cutting-edge technology and a commitment to excellence, RABAX Solar Energy delivers high-performance solar panels and comprehensive energy solutions tailored to meet diverse needs. Our expert team ensures seamless integration, from design to installation, guaranteeing optimal efficiency and long-term reliability. Join us in our journey towards a sustainable tomorrow with RABAX Solar Energy – where the sun powers our future.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Our Values</Subtitle>
        <ValuesContainer>
          <ValueItem>
            <Icon><MdElectricCar /></Icon>
            <IconTitle>Sustainability</IconTitle>
            <Paragraph>We prioritize eco-friendly solutions to promote a cleaner, greener planet.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaRocket /></Icon>
            <IconTitle>Innovation</IconTitle>
            <Paragraph>We are dedicated to advancing solar technology to provide cutting-edge energy solutions.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaCheckCircle /></Icon>
            <IconTitle>Quality</IconTitle>
            <Paragraph>We commit to delivering superior products and services that ensure long-term reliability and efficiency.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaIndustry/></Icon>
            <IconTitle>Integrity</IconTitle>
            <Paragraph>We operate with honesty and transparency, building trust with our clients and partners.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaRegSmile /></Icon>
            <IconTitle>Customer Focus</IconTitle>
            <Paragraph>We strive to exceed customer expectations through personalized service and tailored energy solutions.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaMedal /></Icon>
            <IconTitle>Excellence</IconTitle>
            <Paragraph>Striving for excellence in every aspect of our work, from product quality to customer service and project implementation.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaHandHoldingHeart /></Icon>
            <IconTitle>Empowerment</IconTitle>
            <Paragraph>Enabling individuals, businesses, and communities to take control of their energy needs and contribute to a sustainable future.</Paragraph>
          </ValueItem>
        </ValuesContainer>
      </Section>

      <Section>
        <Subtitle>Why Choose Us</Subtitle>
        <ValuesContainer>
          <ValueItem>
            <Icon><FaBrain /></Icon>
            <IconTitle>Unmatched Expertise</IconTitle>
            <Paragraph>Our team of seasoned professionals brings extensive experience and knowledge in solar energy solutions.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><GiSolarPower /></Icon>
            <IconTitle>Cutting-Edge Technology</IconTitle>
            <Paragraph>We utilize the latest advancements in solar technology to ensure maximum efficiency and reliability.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaCogs /></Icon>
            <IconTitle>Tailored Solutions</IconTitle>
            <Paragraph>We offer customized solar energy systems designed to meet the specific needs of each customer.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaShieldAlt /></Icon>
            <IconTitle>Exceptional Quality</IconTitle>
            <Paragraph>Our commitment to high-quality materials and workmanship guarantees long-lasting performance.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><MdRecycling /></Icon>
            <IconTitle>Sustainable Impact</IconTitle>
            <Paragraph>We empower customers to reduce their carbon footprint and contribute to a greener future.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaHandshake /></Icon>
            <IconTitle>Outstanding Customer Service</IconTitle>
            <Paragraph>Our dedicated support team is always available to assist with any questions or concerns.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaHandHoldingUsd /></Icon>
            <IconTitle>Affordable Options</IconTitle>
            <Paragraph>We provide flexible financing plans to make solar energy accessible and budget-friendly.</Paragraph>
          </ValueItem>
        </ValuesContainer>
      </Section>

      <Section>
        <Subtitle>Environmental Impact</Subtitle>
        <ValuesContainer>
          <ValueItem>
            <Icon><GiElectric /></Icon>
            <IconTitle>Carbon Footprint Reduction</IconTitle>
            <Paragraph>Our solar solutions significantly decrease greenhouse gas emissions, helping combat climate change.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><GiWindTurbine /></Icon>
            <IconTitle>Renewable Energy Promotion</IconTitle>
            <Paragraph>By harnessing the power of the sun, we advocate for and facilitate the use of clean, renewable energy sources.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaSolarPanel /></Icon>
            <IconTitle>Sustainable Practices</IconTitle>
            <Paragraph>We are dedicated to sustainable practices throughout our operations, from sourcing materials to installing solar systems.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><MdOutlinePeopleAlt /></Icon>
            <IconTitle>Energy Independence</IconTitle>
            <Paragraph>We empower communities and businesses to achieve energy independence, reducing reliance on fossil fuels.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><MdEnergySavingsLeaf /></Icon>
            <IconTitle>Conservation Efforts</IconTitle>
            <Paragraph>Our energy-efficient systems contribute to the conservation of natural resources, ensuring a healthier planet for future generations.</Paragraph>
          </ValueItem>
        </ValuesContainer>
      </Section>

      <Section>
        <Subtitle>Financial Benefits</Subtitle>
        <ValuesContainer>
          <ValueItem>
            <Icon><GiMoneyStack /></Icon>
            <IconTitle>Cost Savings</IconTitle>
            <Paragraph>Our solar energy systems reduce electricity bills, offering significant long-term savings for homeowners and businesses.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><AiOutlineDollarCircle /></Icon>
            <IconTitle>Investment Returns</IconTitle>
            <Paragraph>Customers can achieve attractive returns on investment through reduced energy costs and potential government incentives.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><AiOutlineRise /></Icon>
            <IconTitle>Increased Property Value</IconTitle>
            <Paragraph>Installing solar panels can enhance property value, making it a wise financial investment.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><GiScissors /></Icon>
            <IconTitle>Tax Incentives and Rebates</IconTitle>
            <Paragraph>We help customers take advantage of available tax credits, rebates, and incentives, further reducing the upfront costs of solar installation.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><MdEco /></Icon>
            <IconTitle>Energy Cost Stability</IconTitle>
            <Paragraph>By generating their own electricity, customers can protect themselves from rising energy costs and market volatility.</Paragraph>
          </ValueItem>
        </ValuesContainer>
      </Section>

      <Section>
        <Subtitle>Community Involvement</Subtitle>
        <ValuesContainer>
          <ValueItem>
            <Icon><FaUsers /></Icon>
            <IconTitle>Local Engagement</IconTitle>
            <Paragraph>We actively participate in local events and initiatives to promote renewable energy awareness and education.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><GiTeacher /></Icon>
            <IconTitle>Partnerships with Schools</IconTitle>
            <Paragraph>By collaborating with schools and educational institutions, we help foster the next generation of eco-conscious citizens.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaLeaf /></Icon>
            <IconTitle>Charitable Contributions</IconTitle>
            <Paragraph>We support various community projects and charities, providing solar solutions to non-profit organizations and underprivileged areas.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><MdPublic /></Icon>
            <IconTitle>Volunteer Programs</IconTitle>
            <Paragraph>Our team regularly volunteers for community service activities, contributing to the well-being and sustainability of local communities.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><FaLightbulb /></Icon>
            <IconTitle>Energy Workshops</IconTitle>
            <Paragraph>We conduct workshops and seminars to educate residents and businesses about the benefits of solar energy and energy efficiency.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><GiHandTruck /></Icon>
            <IconTitle>Local Employment</IconTitle>
            <Paragraph>By creating job opportunities within the community, we contribute to local economic growth and development.</Paragraph>
          </ValueItem>
          <ValueItem>
            <Icon><MdHandshake /></Icon>
            <IconTitle>Sustainable Partnerships</IconTitle>
            <Paragraph>We collaborate with local governments and organizations to implement sustainable energy projects that benefit the wider community.</Paragraph>
          </ValueItem>
        </ValuesContainer>
      </Section>
    </AboutPageContainer>
    <Footer/>
    <Layout/>
    </div>
  );
};

export default AboutPage;
