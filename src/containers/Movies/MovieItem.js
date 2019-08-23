import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getImageUrl } from '../../utils/formatter/image';
import ItemWrapper from './Items/ItemWrapper';
import DetailWrapper from './Items/DetailWrapper';
import Price from './Items/Price';
import Title from './Items/Title';
import Rating from './Items/Rating';

const ReviewerWrapper = styled.span`
  float: left;
  font-size: 12px;
  margin: 12px 6px;
  @media (max-width: 680px) {
    margin: 12px 6px;
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
      width: 40%;
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
    const movieTitle = title.replace(/[^A-Z0-9]+/ig, '-');
    return (
      <ItemWrapper to={`/movie/view/${movieId}-${movieTitle}`}>
        <ItemContentWrapper>
          <Price voteAverage={voteAverage} />
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
