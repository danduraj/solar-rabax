import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Header from './Header';
import Layout from './Layout';
import Footer from './Footer';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  max-width: 800px;
  width: 100%;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff7f50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
  }
  
`;


const ContactInfo = styled.div`
  max-width: 800px;
  width: 100%;
`;

const InfoTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
  loading: lazy;
`;

const ContactTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff6f61;
  font-family: 'Open Sans', sans-serif;
`;

const ContactMessage = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  text-align: center;
`;

const ContactPage = ({ scrollToSection }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    lookingFor: '',
    name: '',
    mobileNo: '',
    email: '',
    stateDistrict: '',
    pinCode: '',
    avgMonthlyBill: '',
    interestedInFinance: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_et3fk4s', // Replace with your actual Service ID
      'template_lgieaha', // Replace with your actual Template ID
      formData,
      '4oICe8uG4RBVW79Pw' // Replace with your actual User ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({
        lookingFor: '',
        name: '',
        mobileNo: '',
        email: '',
        stateDistrict: '',
        pinCode: '',
        avgMonthlyBill: '',
        interestedInFinance: '',
        message: '',
      });
    }).catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send the message. Please try again.');
    });
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <ContactContainer>
        <ContactTitle>Enquire Now</ContactTitle>
        <ContactMessage>
          Have a question? Contact us today! We're looking forward to hearing from you.
        </ContactMessage>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Title>Please fill out the form provided below, and we will reply to your inquiry shortly. Thank you.</Title>
          <FormGroup>
            <Label>I’m Looking for</Label>
            <Select name="lookingFor" required onChange={handleChange} value={formData.lookingFor}>
              <option value="">Select</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Name*</Label>
            <Input type="text" name="name" required onChange={handleChange} value={formData.name} />
          </FormGroup>
          <FormGroup>
            <Label>Mobile No*</Label>
            <Input type="tel" name="mobileNo" required onChange={handleChange} value={formData.mobileNo} />
          </FormGroup>
          <FormGroup>
            <Label>Email Id*</Label>
            <Input type="email" name="email" required onChange={handleChange} value={formData.email} />
          </FormGroup>
          <FormGroup>
            <Label>State / District*</Label>
            <Input type="text" name="stateDistrict" required onChange={handleChange} value={formData.stateDistrict} />
          </FormGroup>
          <FormGroup>
            <Label>Pin code*</Label>
            <Input type="text" name="pinCode" required onChange={handleChange} value={formData.pinCode} />
          </FormGroup>
          <FormGroup>
            <Label>Avg. Monthly Electricity Bill*</Label>
            <Input type="text" name="avgMonthlyBill" required onChange={handleChange} value={formData.avgMonthlyBill} />
          </FormGroup>
          <FormGroup>
            <Label>Interested in Finance*</Label>
            <Select name="interestedInFinance" required onChange={handleChange} value={formData.interestedInFinance}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Message*</Label>
            <TextArea name="message" required onChange={handleChange} value={formData.message}></TextArea>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
        <ContactInfo>
          <InfoTitle>Find Us</InfoTitle>
          <InfoText>Location</InfoText>
          <InfoText>H.no – 1-98/P, Komatikunta, Nallagandla <br />(Vill), Serilingampally, Hyderabad. 500019</InfoText>
          <InfoText>Contact</InfoText>
          <InfoText>Tel: +(91) 7680012686<br />Email: support@rabaxsolarenergy.com</InfoText>
          <InfoText>Hours</InfoText>
          <InfoText>Monday-Friday: 9:00AM-8:00PM<br />Saturday-Sunday: Closed</InfoText>
          <MapFrame
            title="map"
            src="https://maps.google.com/maps?q=F8G6%2BC26+Hyderabad%2C+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></MapFrame>
        </ContactInfo>
      </ContactContainer>
      <Layout/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
