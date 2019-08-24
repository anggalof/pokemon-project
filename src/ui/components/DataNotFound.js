import React from 'react';
import styled from 'styled-components';
import { SB_WHITE } from '../../utils/constants/StyleConstants';

const Wrapper = styled.div`text-align: center;`;
const Container = styled.div`
  margin: 10px 0;
  font-size: 30px;
  color: ${SB_WHITE};
`;
class DataNotFound extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          DATA TIDAK TERSEDIA
        </Container>
      </Wrapper>
    );
  }
}
export default DataNotFound;
