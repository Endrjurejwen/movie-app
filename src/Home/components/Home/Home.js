import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import bg from 'assets/images/clipart584687b.png';
import {
  media, textDark, flexCenter, absolute, spacing,
} from 'utilities';
import { ButtonCTA, H1 } from 'elements';

const home = props => (
  <Main>
    <Container>
      <div>
        <Title>Movie Lovers</Title>
        <p>Explore movies, write reviews and collect what you love.</p>
      </div>
      <Button type="button" onClick={() => props.history.push('/movies')}>Explore movies</Button>
    </Container>
  </Main>
);

home.propTypes = {
  history: PropTypes.shape().isRequired,
};

const Main = styled.main`
  ${flexCenter()};

  background: url(${bg}) no-repeat 45% 35px;
  background-size: 40%;
  height: 100vh;

  ${media.tablet`
    background-size: 20%;
    background-position: 80% 40%;
    display: block;
    position: relative;
  `}
`;

const Title = styled(H1)`
  color: ${textDark};
  line-height: 1.2;
`;

const Container = styled.div`
  text-align: center;

  ${media.tablet`
    ${absolute({ x: '80px', y: '380px' })};

    text-align: left;
  `}
`;

const Button = styled(ButtonCTA)`
  margin-top: ${spacing[4]};
`;


export default home;