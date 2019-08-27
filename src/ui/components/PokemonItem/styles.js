
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  SB_ORANGE,
  SB_BLACK,
  SB_WHITE,
  SB_GREY,
  SB_GREEN,
  SB_PRIMARY_BLUE,
  SB_SKY_BLUE,
  SB_DARK_GREEN,
  SB_PURPLE,
  SB_DARK_GREY,
} from '../../../utils/constants/StyleConstants';

export const ItemWrapper = styled(Link)`
  width: 100%;
  margin: 15px 0;
  padding: 5px;
  display: inline-block;
  height: auto;
  margin-bottom: 0px;
  border-radius: 10px;
  text-decoration: none;
  color: ${SB_WHITE};
  border: 5px solid ${SB_ORANGE};
  background: url('${(props) => props.image}') no-repeat fixed center;
  background: ${SB_BLACK};

  &:hover {
    cursor: pointer;
    background: ${SB_ORANGE};
    text-decoration: none;
    color: ${SB_WHITE};
    border: 5px solid ${SB_BLACK};
  }
`;
export const ItemContentWrapper = styled.div``;
export const IconImageWrapper = styled.img`
  background-size: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
export const Title = styled.div`
  margin-top: 5px;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  background: ${SB_DARK_GREY};
  padding: 2px;
  color: ${SB_GREY};
  margin: 2px;
  width: 125px;
  border-radius: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 110px;
  }
`;
export const LabelWrapper = styled.div``;
export const LabelAbilities = styled.div`
  width: 65px;
  font-size: 12px;
  float: left;
  border-radius: 5px;
  padding: 2px;
  margin-right: 5px;
  text-align: center;
  background-color: ${(props) => {
    if (props.color === 'purple') {
      return `${SB_PURPLE}`;
    } else if (props.color === 'dark-green') {
      return `${SB_DARK_GREEN}`;
    } else if (props.color === 'sky-blue') {
      return `${SB_SKY_BLUE}`;
    } else if (props.color === 'orange') {
      return `${SB_ORANGE}`;
    } else if (props.color === 'blue') {
      return `${SB_PRIMARY_BLUE}`;
    } else if (props.color === 'green') {
      return `${SB_GREEN}`;
    } else {
      return `${SB_GREY}`;
    }
  }};
  color: ${(props) => (
    props.color === 'grey' || props.color === 'green' ?
      `${SB_BLACK}` : `${SB_WHITE}` )}

  @media (max-width: 768px) {
    width: 50px;
    font-size: 10px;
    padding: 2px 0 4px 0;
  }
`;
