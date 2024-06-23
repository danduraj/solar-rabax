import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FeaturesSection = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const FeaturesTitle = styled.h1`
  font-size: 2.5em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 1500;
  color: #00000;
  text-align: center;
 
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 270px;
  width: 100%;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  max-height: 150px; /* Set a maximum height for images */
  object-fit: cover; /* Ensure images cover the container without distortion */
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2em;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: #002664;
  margin: 15px 0;
`;

const FeatureText = styled.p`
  font-size: 0.9em;
  font-family: 'Open Sans', sans-serif;
  color: #666666;
  margin-bottom: 20px;
`;

const MoreButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #ff6f61;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: #;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const Features = () => {
  const navigate = useNavigate();

  const handleWaterHeater = () => {
    navigate('/solar-water-heater');
  };

  const handleRoofTop =()=>{
    navigate('/solar-roof-top');
  };

  const handleMaintenance = () => {
    navigate('/solar-maintenance');
  };

  const handlePowerFencing = () => {
    navigate('/solar-power-fencing');
  };

  return (
    <FeaturesSection>
      <FeaturesTitle>Our Services</FeaturesTitle>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureImage src="https://media.istockphoto.com/id/588255272/photo/water-boiler-with-solar-panels-on-roof-of-house.jpg?s=612x612&w=0&k=20&c=D1XAtgfUFcqsimurT-fhj-MbwWmgRJTTFMjm5vQt2y4=" alt="Solar Water Heaters" />
          <FeatureContent>
          <FeatureTitle>Solar Water Heaters</FeatureTitle>
          <FeatureText>
            We curate specialized water heaters that are of high-quality and durable finishing.
          </FeatureText>
          </FeatureContent>
          <MoreButton onClick={handleWaterHeater}>Learn More</MoreButton>
        </FeatureCard>
        <FeatureCard>
          <FeatureImage src="https://media.istockphoto.com/id/155442665/photo/solar-panels-on-an-old-roof.jpg?s=612x612&w=0&k=20&c=yiUT1MW2oPw7zNpKH1EoQrK5CMNUnfFB3dguSUH7wZc=" alt="Solar Street Lights" />
          <FeatureContent>
          <FeatureTitle>Solar rooftops</FeatureTitle>
          <FeatureText>
            Solar-powered lights serve you in a convenient and sustainable way with just a minimal investment.
          </FeatureText>
          </FeatureContent>
          <MoreButton onClick={handleRoofTop}>Learn More</MoreButton>
        </FeatureCard>
        <FeatureCard>
          <FeatureImage src="https://cdn.pixabay.com/photo/2020/10/24/07/29/man-5680696_1280.jpg" alt="Solar Fencing" />
          <FeatureContent>
          <FeatureTitle>Operation & maintenance</FeatureTitle>
          <FeatureText>
            Solar fencing system acts as an electric fence around the property to ensure security.
          </FeatureText>
          </FeatureContent>
          <MoreButton onClick={handleMaintenance}>Learn More</MoreButton>
        </FeatureCard>
        <FeatureCard>
          <FeatureImage src="https://media.istockphoto.com/id/119180747/photo/solar-panels-behind-fence.jpg?s=612x612&w=0&k=20&c=P6AjbLssUDk6PkEInLpXzoxd8QJWKgkmOehBS8HCa08=" alt="Solar Photovoltaic Power" />
          <FeatureContent>
          <FeatureTitle>Solar powered fencing</FeatureTitle>
          <FeatureText>
            Photovoltaic systems are easy to install in unused places like rooftops and easy to install.
          </FeatureText>
          </FeatureContent>
          <MoreButton onClick={handlePowerFencing}>Learn More</MoreButton>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;
