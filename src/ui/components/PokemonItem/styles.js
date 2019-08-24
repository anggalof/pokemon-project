
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SB_ORANGE, SB_BLACK, SB_WHITE } from '../../../utils/constants/StyleConstants';

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
  font-size: 14px;
  text-align: center;
`;
