import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SB_FB_BLUE, SB_WHITE } from '../../../utils/constants/StyleConstants';
import FilmFee from '../../../components/FilmFee';

const Wrapper = styled.div`
  margin-top: 2px;
  position: absolute;
  background-color: ${SB_FB_BLUE};
  border-radius: 3px;
  z-index: 999;
  margin: 2px;
  &:hover {
    color: ${SB_WHITE};
  }
`;
const SizeNumberFormat = styled.div`
  font-size: 13px;
  padding: 0 5px;
  display: inline-block;

  @media (max-width: 680px) {
    font-size: 10px;
    margin-left: 0;
  }
`;
class Price extends React.Component {
  render() {
    const { voteAverage } = this.props;
    return (
      <Wrapper>
        <SizeNumberFormat>
          <FilmFee voteAverage={voteAverage} />
        </SizeNumberFormat>
      </Wrapper>
    );
  }
}
Price.propTypes = {
  price: PropTypes.string,
};
export default Price;
