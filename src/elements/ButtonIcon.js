import styled from 'styled-components';
import { absolute, flexCenter } from 'utilities';

export default styled.button`
  ${absolute({ side: 'right' })};
  ${flexCenter()};

  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;