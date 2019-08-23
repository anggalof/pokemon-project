import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from '../../../components/Loading';
import MovieSlider from './MovieSlider';
import fetchMovieRecommendations from '../../../common/recommendations/actions';
import { SB_BLACK, SB_WHITE } from '../../../utils/constants/StyleConstants';

const Wrapper = styled.div`margin: 10px 0;`;
const Container = styled.div`
  background: ${SB_BLACK};
  padding: 5px 20px 30px 20px;
  border: 1px solid #e0e0e0;
  margin: 0 auto;
  max-width: 1080px;
  border-radius: 5px;
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 768px) {
    padding: 5px 15px 30px 15px;
    width: 100%;
  }
`;
const RecommendationWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${SB_WHITE};
  margin: 10px 0;
`;
class Recommendations extends React.PureComponent {
  componentDidMount() {
    this.props.fetchMovieRecommendations(1);
  }
  render() {
    const { recommendations } = this.props;
    const data = recommendations.data;
    if (data === undefined) {
      return <Loading />;
    }
    return (
      <Wrapper>
        <Container>
          <RecommendationWrapper>
            FILM REKOMENDASI
          </RecommendationWrapper>
          <MovieSlider data={data} />
        </Container>
      </Wrapper>
    );
  }
}

Recommendations.propTypes = {
  recommendations: PropTypes.object,
};

const mapStateToProps = (state) => ({
	recommendations: state.recommendations.items,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
  {
		fetchMovieRecommendations,
	},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
