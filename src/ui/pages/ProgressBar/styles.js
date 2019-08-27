import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SB_SKY_BLUE, SB_WHITE } from '../../../utils/constants/StyleConstants';

export const Wrapper = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ShellProgressBar = styled.div`
  float: left;
  height: 20px;
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 13px;
`;
export const PercentageWrapper = styled.div`
  background: linear-gradient(to right, #7b4397 10%,#dc2430 10%);
  height: 20px;
  width: 90%;
  border-radius: 9px;
`;
export const CountPercentage = styled.span`
  float: right;
  padding: 4px;
  color: #000;
  font-size: 0.7em
`;
export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
export const RedirectLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;
export const ButtonRedirect = styled.div`
  margin: 10px auto;
  text-align: center;
  border-radius: 5px;
  padding: 20px 0;
  width: 50%;
  background: ${SB_SKY_BLUE};
  color: ${SB_WHITE};
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
  }
`;
export const ProcessCatchPokemon = styled.div`
  text-align: center;
  font-size: 14px;
`;
