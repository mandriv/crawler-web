import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import {
  NavbarContainer,
  NavbarItem,
  BrandName,
  NavbarLink,
  ActionLink,
} from './styles';

class Navbar extends React.PureComponent {

  render() {
    const currentLocation = this.props.location.pathname;
    return (
      <NavbarContainer>
        <NavbarItem>
          <BrandName>Overseer</BrandName>
        </NavbarItem>
        <NavbarItem>
          <NavbarItem>
            <NavbarLink href="/" current={currentLocation === '/'}>
              Home
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="/explore" current={currentLocation === '/explore'}>
              Explore
            </NavbarLink>
          </NavbarItem>
        </NavbarItem>
        <NavbarItem>
          <ActionLink>
            Sign In
          </ActionLink>
          <ActionLink>
            Sign Up
          </ActionLink>
        </NavbarItem>
      </NavbarContainer>
    );
  }
}

Navbar.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    state: PropTypes.object,
  }).isRequired,
};

Navbar.defaultProps = {

};


export default withRouter(Navbar);
