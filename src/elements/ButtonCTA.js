import styled from 'styled-components';
import {
  primary, textLight, elevation, spacing,
} from 'utilities';

export default styled.button`
  ${elevation[1]};

  padding: ${spacing[1]} ${spacing[3]};
  border-radius: 4px;
  border: 1px solid ${primary};
  background-color: ${primary};
  color: ${textLight};
  cursor: pointer;
  text-transform: uppercase;
  transition: box-shadow .2s ease;

  &:hover {
    ${elevation[2]};
  }
`;