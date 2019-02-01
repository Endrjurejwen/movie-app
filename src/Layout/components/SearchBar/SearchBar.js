import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ButtonIcon,
  SearchForm,
  SearchInput,
  HiddenLabel,
  Icon,
} from 'elements';
import { media, textLight } from 'utilities';

import { getSearchMovies } from 'Movies/actions';

const searchBar = ({
  click, change, text, submit,
}) => (
  <SearchForm onSubmit={submit}>
    <HiddenLabel htmlFor="search">
      {'Search: '}
    </HiddenLabel>
    <SearchInput onChange={change} type="text" id="search" name="search" value={text} placeholder="Search..." />
    <CloseButton onClick={click} type="reset" className="btn--close">
      <Icon
        name="close"
        width="14px"
        height="12px"
        color="#fff"
      />
    </CloseButton>
    <SearchButton className="btn--search" type="submit">
      <Icon
        width="14px"
        height="14px"
        color="#5E35B1"
        name="search"
      />
    </SearchButton>
  </SearchForm>
);

searchBar.propTypes = {
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

searchBar.defaultProps = {
  text: '',
};

const SearchButton = styled(ButtonIcon)`
  width: 40px;
  background-color: ${textLight};
  border-left: 1px solid ${textLight};
`;

const CloseButton = styled(ButtonIcon)`
  right: 65px;
  width: 30px;
  display: none;

  ${media.tablet`
    right: 45px;
  `}
`;

const mapDispatchToProps = dispatch => bindActionCreators({
  getSearchMovies,
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(searchBar));