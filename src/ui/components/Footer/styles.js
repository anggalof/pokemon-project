import styled from 'styled-components';
import { SB_BLACK } from '../../../utils/constants/StyleConstants';

export const FooterWrapper = styled.div`
  display: block;
`;
export const Copy = styled.div`
  padding: 10px 0;
  color: ${SB_BLACK};
  @media only screen and (min-width: 768px) {
    padding: 10px 0 10px;
  }
`;
export const ImageWrapper = styled.p`
  margin-bottom: 0;
  position: relative;
  text-align: center;
  @media only screen and (min-width: 768px) {
    line-height: 26px;
  }
`;
export const CopyRight = styled.span`
  font-size: 11px;
  font-weight: 600;
  font-style: italic;
`;