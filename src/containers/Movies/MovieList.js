import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SB_MEDIUM_GREY } from '../../utils/constants/StyleConstants';
import MovieItem from './MovieItem';

const TotalCountSearch = styled.div`
  color: ${SB_MEDIUM_GREY};
  font-size: 14px;
  margin-left: 5px;
  margin-bottom: 5px;
`;
const GridWrapper = styled.div`
  margin-top: 70px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 680px) {
    margin-top: 110px;
  }
`;
const RowWrapper = styled.div`
  margin-right: -10px !important;
  margin-left: -10px !important;
`;
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <GridWrapper className="clearfix">
        <TotalCountSearch>
          {movies.total_results > 0 ? `( ${movies.total_results} film tersedia )` : ''}
        </TotalCountSearch>
        <RowWrapper className="row">
          {movies.results.map((item) => {
            return (
              <div className="col-xs-6 col-sm-2" key={item.id}>
                <MovieItem
                  title={item.title}
                  movieId={item.id}
                  popularity={item.popularity}
                  posterPath={item.poster_path}
                  overview={item.overview}
                  voteAverage={item.vote_average}
                />
              </div>
            );
          })}
        </RowWrapper>
      </GridWrapper>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.object,
};

export default MovieList;
