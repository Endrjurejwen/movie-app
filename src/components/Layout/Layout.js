import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

layout.propTypes = {
  children: PropTypes.func.isRequired,
};

const Container = styled.div`
  background-image: linear-gradient(to right top, #eeeeee, #e6e4ed, #ded9ec, #d7cfeb, #d1c4e9);
  margin-top: 40px;
`;

export default layout;