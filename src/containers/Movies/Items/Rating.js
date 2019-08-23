import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SB_WHITE, SB_DARK_GREEN } from '../../../utils/constants/StyleConstants';
import rating from '../../../public/rating.png';

const SessionBadgeWrapper = styled.div`
  border: 0px solid ${SB_WHITE};
  border-radius: 5px;
  padding: ${(props) => props.isLarge ? '2px 10px' : '2px 5px'};
  width: 100%;
  color: ${SB_WHITE};
  background: ${SB_DARK_GREEN};
  ${(props) => props.isLarge ? 'margin-left: 5px;' : 'text-align: center;'}
  font-size: ${(props) => props.isLarge ? '20px' : '12px'};
`;
const StarImgWrapper = styled.div`
  left: 0;
  ${(props) => props.isLarge ? '' : 'padding: 2px 0;'}
`;
const ImageWrapper = styled.img`
  float: left;
  ${(props) => props.isLarge ? 'width: 32px; height: 30px;' : 'width: 20px; height: 20px;'}
  backgroung-size: cover;
`;
const TitleAverage = styled.div`
  margin-top: 4px;
`;
class Rating extends React.Component {
  render() {
    const { voteAverage, isLarge } = this.props;
    return (
      <StarImgWrapper>
        <SessionBadgeWrapper className="clearfix" isLarge={isLarge}>
          <ImageWrapper src={rating} alt="rating" isLarge={isLarge} />
          <TitleAverage>
            {voteAverage}
          </TitleAverage>
        </SessionBadgeWrapper>
      </StarImgWrapper>
    );
  }
}

Rating.propTypes = {
  voteAverage: PropTypes.number,
};

export default Rating;
