import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from '../../../components/Loading';
import DataNotFound from '../../../components/DataNotFound';
import MovieSlider from './MovieSlider';
import fetchSimiliarMovie from '../../../common/similiar/actions';
import { isEmpty } from '../../../utils/objects/';
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
const SimiliarWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${SB_WHITE};
  margin: 10px 0;
`;
class SimiliarMovie extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.fetchSimiliarMovie(id, 1);
  }
  render() {
    const { similiar } = this.props;
    const data = similiar.data;
    if (data === undefined) {
      return <Loading />;
    }
    return (
      <Wrapper>
        <Container>
          <SimiliarWrapper>
            FILM SERUPA
          </SimiliarWrapper>
          {isEmpty(data.results) ?
            <DataNotFound/> :
            <MovieSlider data={data}/>
          }
        </Container>
      </Wrapper>
    );
  }
}

SimiliarMovie.propTypes = {
  similiar: PropTypes.object,
};

const mapStateToProps = (state) => ({
	similiar: state.similiar.items,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
  {
		fetchSimiliarMovie,
	},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SimiliarMovie);
