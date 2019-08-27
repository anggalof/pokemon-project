import styled from 'styled-components';
import { SB_LIGHT_GREY, SB_WHITE } from '../../../utils/constants/StyleConstants';

export const Wrapper = styled.div`
  margin: 25px auto;
  background-color: ${SB_LIGHT_GREY};
  margin-top: 70px;
  padding: 10px;
`;
export const ContentWrapper = styled.div`
  background: ${SB_WHITE};
  padding: 5px 20px 30px 20px;
  border: 1px solid #e0e0e0;
  margin: 0 auto;
  max-width: 1080px;
  border-radius: 5px;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    padding: 5px 15px 30px 15px;
    width: 100%;
  }
`;