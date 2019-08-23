import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tokoflixLogo from '../../public/tokoflix-logo.png';
import { SB_BLACK } from '../../utils/constants/StyleConstants';

const NavBar = styled(Navbar)`
  min-height: 70px !important;
  line-height: 70px;
  background-color: ${SB_BLACK} !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;
const MenuPanel = styled(Nav)`
  width: auto;
  white-space: nowrap;
  min-width: 300px;
  @media (max-width: 991px) {
    margin-right: 0;
  }
  @media (max-width: 680px) {
    margin: 0 !important;
  }​
`;
const LinkWrapper = styled(Link)`
  padding: 10px 15px !important;
  @media (max-width: 680px) {
    padding: 10px 5px !important;
  }
`;
const Logo = styled.img`
  background-size: cover;
  width: 60px;
`;
const HeaderButton = styled.button`
  margin: 0 5px;
  @media (max-width: 680px) {
    padding: 6px 5px !important;
    font-size: 10px !important;
    margin: 0 2px !important;
  }
`;
const LogoWrapper = styled.div`float: left;`;
const ButtonMovie = styled.div`
  float: left;
  width: 0;
`;
const ButtonBalanceWrapper = styled.div`
  float: right;
  @media (max-width: 680px) {
    float: none !important;
    margin: 40px 0 0 0 !important;
  }
`;
const ButtonBalance = styled.div`cursor: none !important;`;

class Header extends Component {
  render() {
    return (
      <NavBar inverse collapseOnSelect fluid fixedTop>
        <LogoWrapper>
          <LinkWrapper className="navbar-brand" to="/">
            <Logo alt="logo" src={tokoflixLogo} />
          </LinkWrapper>
        </LogoWrapper>
        <ButtonMovie>
          <MenuPanel>
            <HeaderButton type="submit" className="btn btn-primary">Film Populer</HeaderButton>
            <HeaderButton type="submit" className="btn btn-primary">Film Terbaru</HeaderButton>
            <HeaderButton type="submit" className="btn btn-primary">Film Peringkat Teratas</HeaderButton>
          </MenuPanel>
        </ButtonMovie>
        <ButtonBalanceWrapper>
          <ButtonBalance className="btn btn-warning">
            Saldo Anda IDR 100.000
          </ButtonBalance>
        </ButtonBalanceWrapper>
        <div className="clearfix" />
      </NavBar>
    );
  }
}

export default Header;
