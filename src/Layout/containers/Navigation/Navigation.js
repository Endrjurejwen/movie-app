import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Backdrop, Logo } from 'elements';
import {
  primary,
  textLight,
  fixed,
  flexCenter,
  elevation,
  spacing,
} from 'utilities';

import MenuButton from 'Layout/components/MenuButton/MenuButton';
import SideDrawer from 'Layout/components/SideDrawer/SideDrawer';
import NavigationItems from 'Layout/components/NavigationItems/NavigationItems';
import SearchBar from 'Layout/components/SearchBar/SearchBar';

import { toggleMenu } from 'Layout/actions';
import { getSearchMovies, resetMovies } from 'Movies/actions';

class Navigation extends Component {
  static propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    resetMovies: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired,
  }

  state = {
    searchText: '',
  }

  navigationHandler = () => {
    this.props.history.push('/home');
  }

  changeHandler = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  submitHandler = (event) => {
    const { searchText } = this.state;
    const { history, resetMovies } = this.props;
    event.preventDefault();
    const query = searchText.replace(/\s+/g, '%20');
    resetMovies();

    history.push({
      pathname: '/search',
      search: query,
    });
    this.setState({
      searchText: '',
    });
  }

  FocusOnInputHandler = (event) => {
    const input = event.target.closest('button').previousSibling;
    input.focus();
    // event.target.closest('button').blur();
  }

  render() {
    const { searchText } = this.state;
    const { isMenuOpen, toggleMenu } = this.props;
    return (
      <NavContainer>
        <MenuButton toggleMenu={toggleMenu} isOpen={isMenuOpen} />
        <SideDrawer isOpen={isMenuOpen} closeMenu={toggleMenu} />
        {isMenuOpen && <Backdrop close={toggleMenu} />}
        <Logo height="50%" onClick={this.navigationHandler} />
        <SearchBar
          change={this.changeHandler}
          submit={this.submitHandler}
          click={this.FocusOnInputHandler}
          text={searchText}
        />
        <NavigationItems desktop />
      </NavContainer>
    );
  }
}

const NavContainer = styled.div`
  ${fixed()};
  ${flexCenter({ justifyContent: 'space-between' })};
  ${elevation[3]};

  color: ${textLight};
  background-color: ${primary};
  width: 100vw;
  height: 50px;
  padding: 0 ${spacing[3]};
  z-index: 10;
`;

const mapStateToProps = state => ({
  isMenuOpen: state.menu.isMenuOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMenu,
  getSearchMovies,
  resetMovies,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));