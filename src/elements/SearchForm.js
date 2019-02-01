import styled from 'styled-components';
import {
  media,
  textLight,
  primary,
  absolute,
  flexCenter,
} from 'utilities';

export default styled.form`
  ${flexCenter({ justifyContent: 'start' })}

  margin: 0 20px; // refactor: maybe change container to grid to manipulate grid-row-gap and width

  position: relative;
  width: 100%;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid ${textLight};
  color: ${textLight};
  background-color: ${primary};

  &:focus-within {
    ${absolute()};

    border: none;
    display: flex;
    width: 100vw;
    height: 100%;
    z-index: 50;
    margin: 0;

    .btn--close {
      display: flex;
    }

    .btn--search {
        width: 60px;
      }
  }

  ${media.tablet`
    max-width: 30%;

    &:focus-within {
      position: relative;
      border: 1px solid ${textLight};
      height: auto;

      .btn--search {
        width: 40px;
      }
    }
  `}
`;