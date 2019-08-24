import styled from 'styled-components';
import { SB_ORANGE, SB_PURPLE } from '../../../utils/constants/StyleConstants';

export const ImageWrapper = styled.img`
  background: #a0a0a0;
  background-size: cover;
  width: 180px;
  height: 250px;
  float: left;
  @media (max-width: 670px) {
    text-align: center;
    float: none;
  }
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
export const TitleDetailWrapper = styled.div`
  padding: 5px 0;
  font-weight: bold;
  font-size: 14px;
`;
export const ResultData = styled.div`
  padding-top: 5px;
  color: ${SB_PURPLE};
`;
export const OverviewWrapper = styled.div`
  margin: 10px;
  padding: 5px;
`;
export const TitleOverview = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
export const DetailOverview = styled.div`font-size: 14px;`;
export const ButtonWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;
export const ButtonBuy = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 20%;
  @media (max-width: 680px) {
    width: 50%;
  }
`;
export const LinkHomePage = styled.div`cursor: pointer;`;
