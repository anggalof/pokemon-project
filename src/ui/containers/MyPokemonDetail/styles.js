import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import {
  SB_BLACK, SB_DARK_GREEN,
  SB_GREEN,
  SB_GREY,
  SB_ORANGE,
  SB_PRIMARY_BLUE,
  SB_PURPLE,
  SB_SKY_BLUE,
  SB_WHITE,
  SB_BLUE,
} from '../../../utils/constants/StyleConstants';

export const ItemContentWrapper = styled.div``;
export const ImagePokemonWrapper = styled.img`
  background-size: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
export const NicknameTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 3px;
  margin-bottom: 5px;
`;
export const TitleWrapper = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 3px;
  margin-bottom: 5px;
  text-align: center;
`;
export const Line = styled.div`border-top: 2px solid ${SB_ORANGE};`;
export const DetailWrapper = styled.div`padding: 10px 0;`;
export const ButtonCatchPokemonWrapper = styled.div`
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  text-align: center;
  background: ${SB_SKY_BLUE};
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    background: ${SB_PRIMARY_BLUE};
  }
`;
export const IconCatchPokemon = styled.img`
  background-size: cover;
  width: 50px;
  float: left;
  margin-left: 5px;
`;
export const ButtonCatchPokemon = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${SB_WHITE};
  float: left;
  margin-top: 15px;
  margin-left: 10px;
`;
export const TitleDetailWrapper = styled.div`
  padding: 5px 0;
  font-weight: bold;
  font-size: 14px;
`;
export const TitleNicknameWrapper = styled.div`
  padding: 5px 0;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  width: 100%;
`;
export const ResultData = styled.div`
  padding-top: 5px;
  color: ${SB_PURPLE};
`;
export const OverviewWrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
  background: ${SB_GREY};
`;
export const CategoryDetailWrapper = styled.div`
  border-radius: 5px;
  width: 60%;
  padding: 20px;
  background: ${SB_BLUE};
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;
export const LabelCategoryDetail = styled.div`
  font-size: 16px;
  color: ${SB_WHITE};
`;
export const LabelWrapper = styled.div``;
export const LabelAbilities = styled.div`
  width: 80px;
  font-size: 12px;
  float: left;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  text-align: center;
  background-color: ${(props) => {
    if (props.index === 0) {
      return `${SB_PURPLE}`;
    } else if (props.index === 1) {
      return `${SB_PRIMARY_BLUE}`;
    } else if (props.index === 2) {
      return `${SB_GREEN}`;
    } else {
      return `${SB_GREY}`;
    }
  }};
  color: ${(props) => (
    props.index === 2 ?
      `${SB_BLACK}` : `${SB_WHITE}` )}

  @media (max-width: 768px) {
    width: 70px;
    font-size: 10px;
    padding: 4px 0 6px 0;
  }
`;
export const LabelType = styled.div`
  width: 80px;
  font-size: 12px;
  float: left;
  border-radius: 5px;
  padding: 2px;
  margin-right: 5px;
  text-align: center;
  background-color: ${(props) => {
    if (props.name === 'poison') {
      return `${SB_PURPLE}`;
    } else if (props.name === 'bug') {
      return `${SB_DARK_GREEN}`;
    } else if (props.name === 'flying') {
      return `${SB_SKY_BLUE}`;
    } else if (props.name === 'fire') {
      return `${SB_ORANGE}`;
    } else if (props.name === 'water') {
      return `${SB_PRIMARY_BLUE}`;
    } else if (props.name === 'grass') {
      return `${SB_GREEN}`;
    } else {
      return `${SB_GREY}`;
    }
  }};
  color: ${(props) => (
    props.color === 'grey' || props.color === 'green' ?
      `${SB_BLACK}` : `${SB_WHITE}` )}

  @media (max-width: 768px) {
    width: 70px;
    font-size: 10px;
    padding: 4px 0 6px 0;
  }
`;
export const GenderFemaleImage = styled.img`
  width: 50px;
  background-size: cover;
`;
export const GenderMaleImage = styled.img`
  width: 40px;
  background-size: cover;
`;
export const InputWrapper = styled.div`
  text-align: center;
`;
export const Input = styled.input`
  width: 30%;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid ${SB_SKY_BLUE};
`;
export const ButtonChangeName = styled(Button)`
  width: 30%;
  cursor: pointer;
  margin: 10px auto !important;
  padding: 10px 0 !important;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  background: ${SB_SKY_BLUE} !important;
  color: ${SB_WHITE} !important;
`;
