import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { backdropBackground, fixed } from 'utilities';

const backdrop = ({ close }) => <Background onClick={close} />;

backdrop.propTypes = {
  close: PropTypes.func.isRequired,
};

const Background = styled.div`
  ${fixed()};
  
  width: 100vw;
  height: 100vh;
  background-color: ${backdropBackground};
  z-index: 20;
`;

export default backdrop;
