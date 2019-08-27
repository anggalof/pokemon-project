import styled from 'styled-components';
import H3 from '../H3';

export const Wrapper = styled.div`
  margin: 10px auto;
  max-width: 1080px;
`;
export const ContentWrapper = styled.div`
  background: #fff;
  padding: 5px 20px 10px 20px;
  @media (max-width: 768px) {
    padding: 5px 8px 10px 8px;
  }
  border: 1px solid #e0e0e0;
  margin: 10px auto;
  max-width: 1080px;
  border-radius: 5px;
  position: relative;
`;
export const CenteredH3 = styled(H3)`
  text-align: center;
`;
