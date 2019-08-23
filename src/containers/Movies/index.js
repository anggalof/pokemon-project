import React from 'react';
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import Pagination from "react-js-pagination";
import styled from 'styled-components';
import querySearch from 'stringquery';
import fetchMovies from '../../common/movies/actions';
import { SB_DARK_GREY, SB_LIGHT_GREY} from '../../utils/constants/StyleConstants';
import Loading from '../../components/Loading';
import HomePagePoster from '../../components/HomePagePoster';
import MovieList from './MovieList';

const Wrapper = styled.div`
  background-color: ${SB_LIGHT_GREY};
`;
const PaginationWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;
const Rectangle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.69;
  background-color: ${SB_DARK_GREY};
`;
class Movies extends React.Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    let page = 1;
    if (page !== '' || page !== undefined) {
      const value = querySearch(this.props.location.search);
      page = value.page;
    }
    fetchMovies(page);
  }
  handlePageChange = (page) => {
    this.props.fetchMovies(page)
      .then((response) => {
        const newPage = response.data.page;
        this.props.history.push(`?page=${newPage}`);
      });
  };
  render() {
    const { movies } = this.props;
    const movieList = movies.data;
    return (
      <Wrapper>
        {movieList !== undefined ?
          <div>
            <MovieList
              movies={movieList}
            />
          <PaginationWrapper>
            <Pagination
              activePage={movieList.page}
              itemsCountPerPage={movieList.total_pages}
              totalItemsCount={movieList.total_results}
              onChange={this.handlePageChange}
            />
          </PaginationWrapper>
          </div>
          : <div>
            <HomePagePoster />
            <Rectangle>
              <Loading />
            </Rectangle>
          </div>
        }
	  	</Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
	movies: state.movies.items,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
		fetchMovies,
	},
    dispatch
  );
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withRouter)(Movies);
