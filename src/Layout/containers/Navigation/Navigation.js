import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import MenuButton from '../../../elements/MenuButton';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
import Backdrop from '../../../elements/Backdrop';
import SearchBar from '../../components/SearchBar/SearchBar';
import Logo from '../../../utilities/Logo';

import { toggleMenu } from '../../actions';
import { getSearchMovies, resetMovies } from '../../../Movies/actions';

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
        <Logo height="50%" />
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
  color: #fff;
  background-color: #5E35B1;
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .14), 0 3px 6px rgba(0, 0, 0, .24);
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