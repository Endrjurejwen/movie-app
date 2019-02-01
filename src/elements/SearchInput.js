import styled from 'styled-components';
import { media } from 'utilities';

export default styled.input`
  width: 70%;
  border: none;
  font-size: inherit;
  background-color: transparent;
  color: inherit;
  outline: none; // check whether it doesn't interfere web accessing (ARIA)

  &::placeholder {
    color: inherit;
  }

  ${media.tablet`
    width: 84%;
  `}
`;