import styled from 'styled-components';
import {
  SB_GREY,
  SB_DARK_GREY,
} from '../../../utils/constants/StyleConstants';

export const ItemContentWrapper = styled.div``;
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
    width: 100%;
    margin: 0;
  }
`;
export const ImagePokemon = styled.img`
  background-size: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
