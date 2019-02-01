import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { bodyBackground } from 'utilities';

import Navigation from 'Layout/containers/Navigation/Navigation';
import Footer from 'Layout/components/Footer/Footer';

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
  children: PropTypes.shape().isRequired,
};

const Container = styled.div`
  background-image: ${bodyBackground};
  padding-top: 40px;
  min-height: 100vh;
`;

export default layout;