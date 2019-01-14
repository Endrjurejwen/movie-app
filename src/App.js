/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Layout from './components/Layout/Layout';
import bg from './assets/images/clipart584687b.png';
import media from './utilities/media';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <StyledMain>
            <Title>Movie Lovers</Title>
          </StyledMain>
        </Layout>
      </div>
    );
  }
}

const StyledMain = styled.main`
  background-image: url(${bg});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 45% 25%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet`
    background-size: 20%;
    background-position: 80%;
  `}
`;

const Title = styled.h1`
  font-size: 34px;
  color: #222;
`;

export default App;
