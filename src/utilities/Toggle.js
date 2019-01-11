import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    on: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on,
    }));
  }

  render() {
    const { children } = this.props;
    const { on } = this.state;
    return children({
      on,
      toggle: this.toggle,
    });
  }
}