import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const movieCard = ({
  title, date, bgImage,
}) => (
  <Card>
    <Background backgroundImage={bgImage} />
    <Details>
      <Title>{title}</Title>
      <Description>{date}</Description>

      <MoreButton type="button">Read more</MoreButton>
      <button type="button">Add to Favorites</button>
    </Details>
  </Card>
);

movieCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  bgImage: PropTypes.string,
};

movieCard.defaultProps = {
  title: 'No Title',
  date: '0000-00-00',
  bgImage: 'No image',
};

const Card = styled.div`
  //border: 1px solid #222;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .24);
  margin: 20px;
  max-width: 500px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #eee;
`;

const Background = styled.div`
  // width: auto;
  height: 165px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Details = styled.div`
  text-align: left;
  padding: 20px;
  display: grid;
  grid-template-rows: 60px 1fr 1fr;
  grid-template-columns: 70% 30%;
`;

const Title = styled.h3`
  grid-column: 1 / -1;
`;

const Description = styled.p`
  grid-column: 1 / -1;
  grid-row: 2;
`;

const MoreButton = styled.button`
  
`;

export default movieCard;