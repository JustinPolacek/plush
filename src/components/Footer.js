   
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30%;
  background-color: hotpink;
  color: lightgray;
  display: flex;
  justify-content: center;
`;

const Designer = styled.div`
font-size: 16px;
display: flex;
justify-content: space-between;
align-items: center;
a{
  color: black;
}
@media only screen and (max-width: 480px) {
    flex-direction: column;
  }


`

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <a href="https://www.instagram.com/plushpupspetspa/?hl=en"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
          <a   href="https://www.facebook.com/plushpupspetboutiqueandspa/"><img src="https://img.icons8.com/color/48/000000/facebook-new.png"/></a>         
          <a  href="https://www.yelp.com/biz/plush-pups-pet-boutique-and-spa-riverside"><img src="https://img.icons8.com/color/48/000000/yelp.png"/></a>
        </List>
      </Wrapper>
      <Designer>
       
      </Designer>
    </Container>
  );
};

export default Footer;