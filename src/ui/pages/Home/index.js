import React from 'react';
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';

import fetchPokemonList from '../../common/pokemons/actions';

import Loading from '../../components/Loading';
import HomeLoading from '../../components/HomeLoading';

import PokemonList from '../../containers/PokemonList';

import { Wrapper, Container, Rectangle, Line } from './styles';

class Home extends React.Component {
  componentDidMount() {
    const { fetchPokemonList } = this.props;
    fetchPokemonList();
  }
  render() {
    const { pokemons } = this.props;
    const pokemonList = pokemons.data;
    return (
      <Wrapper>
        <Container>POKEMON LIST</Container>
        <Line />
        {pokemonList !== undefined ?
          <div>
            <PokemonList
              pokemons={pokemonList}
            />
          </div>
          : <div>
            <HomeLoading />
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
	pokemons: state.pokemons.items,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
		fetchPokemonList,
	},
    dispatch
  );
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withRouter)(Home);
