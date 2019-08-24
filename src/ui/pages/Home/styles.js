import styled from 'styled-components';
import { SB_DARK_GREY, SB_LIGHT_GREY, SB_ORANGE } from '../../../utils/constants/StyleConstants';

export const Wrapper = styled.div`
  background-color: ${SB_LIGHT_GREY};
  margin-top: 70px;
  @media (max-width: 680px) {
    margin-top: 110px;
  }
`;
export const Container = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
`;
export const Rectangle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.69;
  background-color: ${SB_DARK_GREY};
`;
export const Line = styled.div`border-top: 2px solid ${SB_ORANGE};`;
