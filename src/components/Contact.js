import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 100vh;
  background-color: white;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    margin-top: 200px;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 100px;

  }
`;

const Title = styled.h1`
  margin-top: 0;
  color: hotpink;
  @media only screen and (max-width: 480px) {
    margin-left: 100px;

    
    @media only screen and (max-width: 1300) {
      margin-bottom: 50px;
      justify-content: center;
    
   
  }
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  font-weight: bold;
  font-size: 13px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: hotpink;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1300px) {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 300px;
    justify-content: center;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width:  15%;  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  font-weight: bold;


  a{
      color: hotpink;
      text-decoration: none;
      transition: none;
      &:hover{
          background-color: white;
          color: crimson;
      }
  }
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />             

            <Text><a href="https://www.google.com/maps/place/Plush+Pups+pet+boutique+and+spa/@33.9148852,-117.4588702,14.73z/data=!4m5!3m4!1s0x0:0x9128f4a658556b44!8m2!3d33.9136598!4d-117.4567583">10068 Magnolia Ave, Riverside, CA 92503</a> </Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>  HOURS :Tue-Sat 8:00 am - 4:00 pm</Text>
            <Text> </Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text><a href="tel:+9514817899">951-481-7899</a></Text>
            <Text></Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;