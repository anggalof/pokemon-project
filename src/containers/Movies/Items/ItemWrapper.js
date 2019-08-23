import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SB_ORANGE, SB_BLACK, SB_WHITE } from '../../../utils/constants/StyleConstants';

const ItemWrapper = styled(Link)`
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  display: inline-block;
  height: auto;
  margin-bottom: 0px;
  border-radius: 10px;
  text-decoration: none;
  color: ${SB_WHITE};
  border: 5px solid ${SB_ORANGE};
  background-color: ${SB_BLACK};

  &:hover {
    cursor: pointer;
    background: ${SB_ORANGE};
    text-decoration: none;
    color: ${SB_WHITE};
    border: 5px solid ${SB_BLACK};
  }
`;

export default ItemWrapper;
