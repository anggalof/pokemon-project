import styled from 'styled-components';
import { SB_DARK_GREY } from '../../../utils/constants/StyleConstants';

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0px solid ${SB_DARK_GREY};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0;
  border-top: 0;
  @media (max-width: 680px) {
    padding: 5px 0;
  }
`;

export default DetailWrapper;
