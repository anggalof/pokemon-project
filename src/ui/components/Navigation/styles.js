import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SB_BLACK } from '../../../utils/constants/StyleConstants';

export const NavBar = styled(Navbar)`
	min-height: 70px !important;
	line-height: 70px;
	background-color: ${SB_BLACK} !important;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;
export const LinkWrapper = styled(Link)`
	padding: 10px 15px !important;
	@media (max-width: 680px) {
    	padding: 10px 5px !important;
	}
`;
export const Logo = styled.img`
	background-size: cover;
	width: 60px;
	border-radius: 50px;
    height: 55px;
`;
export const LogoWrapper = styled.div`float: left;`;
export const ButtonBalanceWrapper = styled.div`
	float: right;
	font-weight: bold;
`;
export const ButtonBalance = styled.div`cursor: none !important;`;
