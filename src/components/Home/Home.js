import React from 'react';
import styled from 'styled-components';

import bg from '../../assets/images/clipart584687b.png';
import media from '../../utilities/media';

const home = () => (
  <StyledMain>
    <Container>
      <Title>Movie Lovers</Title>
      <p>Explore movies, write reviews and collect what you love.</p>
      <CTAbutton type="button">Explore movies</CTAbutton>
    </Container>
  </StyledMain>
);

const StyledMain = styled.main`
  background-image: url(${bg});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 45% 15%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet`
    background-size: 20%;
    background-position: 80% 40%;
    display: block;
    position: relative;
  `}
`;

const Title = styled.h1`
  font-size: 44px;
  color: #333;
`;

const Container = styled.div`
  padding: 30px;

  ${media.tablet`
    position: absolute;
    top: 380px;
    left: 80px;
    text-align: left;
  `}
`;

const CTAbutton = styled.button`
  margin-top: 20px;

  padding: 10px 25px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: .15em;
  font-weight: bold;
  border-radius: 4px;
  border: 2px solid #5E35B1;
  background-color: #5E35B1;
  color: #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
  cursor: pointer
`;


export default home;