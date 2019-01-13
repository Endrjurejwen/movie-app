import React from 'react';
import PropTypes from 'prop-types';

const icon = ({
  name, color, height, width,
}) => {
  switch (name) {
    case 'close':
      return (
        <svg height={height} width={width} viewBox="0 0 64 64">
          <g>
            <path
              fill={color}
              d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"
            />
          </g>
        </svg>
      );
    case 'search':
      return (
        <svg height="16px" width="16px" x="0px" y="0px" viewBox="0 0 56 56">
          <path
            fill={color}
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
      s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
      c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
      s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      );
    default:
      return null;
  }
};

icon.defaultProps = {
  color: '#222',
  height: '16px',
  width: '16px',
};

icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default icon;