import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchPokemon from '../../common/pokemon/actions';
import HomeLoading from '../../components/HomeLoading';
import PokemonDetail from '../../containers/PokemonDetail';

import { Wrapper, ContentWrapper } from './styles';

class MyPokemonList extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchPokemon(match.params.id);
  }
  render() {
    const { pokemon } = this.props;
    const data = pokemon.data;

    if (data === undefined) {
      return <div>
        <HomeLoading />
      </div>;
    }
    return (
      <Wrapper>
        <ContentWrapper>
          <PokemonDetail
            name={data.name}
            stats={data.stats}
            abilities={data.abilities}
            image={data.sprites}
            types={data.types}
            weight={data.weight}
            height={data.height}
          />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

MyPokemonList.propTypes = {
  pokemon: PropTypes.object,
};
const mapStateToProps = (state) => ({
	pokemon: state.pokemon.items,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
  {
		fetchPokemon,
	},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonList);
