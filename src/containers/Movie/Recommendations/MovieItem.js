import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getImageUrl } from '../../../utils/formatter/image';
import ItemWrapper from '../../Movies/Items/ItemWrapper';
import DetailWrapper from '../../Movies/Items/DetailWrapper';
import Price from '../../Movies/Items/Price';
import Title from '../../Movies/Items/Title';
import Rating from '../../Movies/Items/Rating';

const ReviewerWrapper = styled.span`
  float: left;
  font-size: 12px;
  margin: 12px 6px;
  @media (max-width: 680px) {
    margin: 12px 2px;
    display: block;
  }
`;
const BadgeWrapper = styled.div`
  padding-top: 5px;
  float: left;
  @media (min-width: 680px) {
    width: 42%;
  }
  @media (max-width: 768px) {
    width: 45%;
  }
`;
const ImageWrapper = styled.img`
  background: #a0a0a0;
  background-size: cover;
  width: 100%;
  height: 180px;
  position: relative;
`;
const ItemContentWrapper = styled.div`position: relative;`;
class MovieItem extends React.Component {
  render() {
    const {
      title,
      movieId,
      posterPath,
      voteAverage,
      popularity,
    } = this.props;
    return (
      <ItemWrapper to={`/movie/view/${movieId}-${title}`}>
        <ItemContentWrapper>
          <Price voteAverage={voteAverage} isRecommend />
          <ImageWrapper src={getImageUrl(posterPath, 'small')} alt="poster" />
          <DetailWrapper>
            <BadgeWrapper>
              <Rating voteAverage={voteAverage} />
            </BadgeWrapper>
            <ReviewerWrapper>
              ({popularity})
            </ReviewerWrapper>
            <div className="clearfix" />
            <Title title={title} />
          </DetailWrapper>
        </ItemContentWrapper>
      </ItemWrapper>
    );
  }
}

MovieItem.propTypes = {
  title: PropTypes.string,
  movieId: PropTypes.number,
  posterPath: PropTypes.string,
  voteAverage: PropTypes.number,
  popularity: PropTypes.number,
};

export default MovieItem;
