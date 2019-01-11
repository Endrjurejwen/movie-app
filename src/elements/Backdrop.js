import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const backdrop = ({ close }) => <Background onClick={close} />;

backdrop.propTypes = {
  close: PropTypes.func.isRequired,
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default backdrop;
