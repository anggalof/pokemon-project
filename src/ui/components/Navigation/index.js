import React, { Component } from 'react';
import {
  NavBar,
  LinkWrapper,
  Logo,
  LogoWrapper,
  ButtonBalanceWrapper,
  ButtonBalance,
} from './styles';

class Navigation extends Component {
  render() {
    return (
      <NavBar inverse collapseOnSelect fluid fixedTop>
        <LogoWrapper>
          <LinkWrapper className="navbar-brand" to="/">
            <Logo alt="logo" src={process.env.PUBLIC_URL + '/img/pokemon-logo.jpg'} />
          </LinkWrapper>
        </LogoWrapper>
        <ButtonBalanceWrapper to="/my-pokemon-list/1">
          <ButtonBalance className="btn btn-info">
            My Pokemon List
          </ButtonBalance>
        </ButtonBalanceWrapper>
        <div className="clearfix" />
      </NavBar>
    );
  }
}

export default Navigation;
