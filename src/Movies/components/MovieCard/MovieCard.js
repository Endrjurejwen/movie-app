import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ButtonCTA, Icon, H5 } from 'elements';
import {
  cardBackgroundLight, flexCenter, elevation, spacing,
} from 'utilities';

const movieCard = ({
  title, date, bgImage, readMore, addOrRemoveFavorite, iconName,
}) => (
  <Card>
    <Background backgroundImage={bgImage} />
    <Details>
      <Title>{title}</Title>
      <Description>{date}</Description>
      <ButtonCTA type="button" onClick={readMore}>Read more</ButtonCTA>
      <LoveButton onClick={addOrRemoveFavorite} type="button"><Icon name={iconName} width="30px" height="30px" color="#5E35B1" /></LoveButton>
    </Details>
  </Card>
);

movieCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  bgImage: PropTypes.string,
  readMore: PropTypes.func.isRequired,
  addOrRemoveFavorite: PropTypes.func.isRequired,
  iconName: PropTypes.string,
};

movieCard.defaultProps = {
  title: 'No Title',
  date: '0000-00-00',
  bgImage: 'No image',
  iconName: 'love',
};

const Card = styled.div`
  ${elevation[2]};

  margin: ${spacing[1]};
  max-width: 500px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${cardBackgroundLight};
`;

const Background = styled.div`
  height: 165px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Details = styled.div`
  text-align: left;
  padding: ${spacing[2]};
  display: grid;
  grid-template-rows: minmax(40px, auto) 1fr 1fr;
  grid-template-columns: 70% 30%;
  grid-gap: ${spacing[1]};
`;

const Title = styled(H5)`
  grid-column: 1 / -1;
`;

const Description = styled.p`
  grid-column: 1 / -1;
  grid-row: 2;
`;

const LoveButton = styled.button`
  ${flexCenter()};

  background-color: transparent;
  border: none;
  cursor: pointer; 
`;

export default movieCard;