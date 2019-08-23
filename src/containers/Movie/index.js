import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import fetchMovie from '../../common/movie/actions';
import HomePagePoster from '../../components/HomePagePoster';
import { SB_LIGHT_GREY, SB_WHITE } from '../../utils/constants/StyleConstants';
import { formatSetDate } from '../../utils/formatter/date';
import MainContent from './MainContent';
import SimiliarMovie from './SimiliarMovie';
import Recommendations from './Recommendations';

const Wrapper = styled.div`
  margin: 25px auto;
  background-color: ${SB_LIGHT_GREY};
  margin-top: 70px;
  padding: 10px;
  @media (max-width: 680px) {
    margin-top: 110px;
  }
`;
const ContentWrapper = styled.div`
  background: ${SB_WHITE};
  padding: 5px 20px 30px 20px;
  border: 1px solid #e0e0e0;
  margin: 0 auto;
  max-width: 1080px;
  border-radius: 5px;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    padding: 5px 15px 30px 15px;
    width: 100%;
  }
`;
class Movie extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchMovie(match.params.id);
  }
  render() {
    const { movie } = this.props;
    const data = movie.data;
    if (data === undefined) {
      return <div>
        <HomePagePoster />
      </div>;
    }
    const releaseDate = formatSetDate(data.release_date);
    return (
      <Wrapper>
        <ContentWrapper>
          <MainContent
            title={data.title}
            voteAverage={data.vote_average}
            popularity={data.popularity}
            posterPath={data.poster_path}
            genres={data.genres}
            runtime={data.runtime}
            budget={data.budget}
            revenue={data.revenue}
            homePage={data.homepage}
            status={data.status}
            productionCountries={data.production_countries}
            releaseDate={releaseDate}
            overview={data.overview}
          />
        </ContentWrapper>
        <SimiliarMovie id={data.id} />
        <Recommendations movieId={this.props.match.params.id} />
      </Wrapper>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object,
};
const mapStateToProps = (state) => ({
	movie: state.movie.items,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
  {
		fetchMovie,
	},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
