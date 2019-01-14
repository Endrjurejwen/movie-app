import React from 'react';
import styled from 'styled-components';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const layout = ({ children }) => (
  <>
    <Navigation />
    <Container>
      {children}
    </Container>
    <Footer />
  </>
);

const Container = styled.div`
  margin: 50px auto auto;
  // max-width: 1000px;
  //box-shadow: 0 10px 20px rgba(0, 0, 0, .24);
  background-image: linear-gradient(to right top, #eeeeee, #e6e4ed, #ded9ec, #d7cfeb, #d1c4e9);
  height: 600px;
`;

export default layout;