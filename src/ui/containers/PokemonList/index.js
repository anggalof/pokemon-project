import React from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../../components/PokemonItem';
import { TotalCountSearch, GridWrapper, RowWrapper } from './styles';

class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <GridWrapper className="clearfix">
        <TotalCountSearch>
          {pokemons.results.length > 0 ? `(${pokemons.results.length} pokemon available)` : ''}
        </TotalCountSearch>
        <RowWrapper className="row">
          {pokemons.results.map((item) => {
            return (
              <div className="col-xs-6 col-sm-2" key={item.url}>
                <PokemonItem name={item.name} url={item.url} />
              </div>
            );
          })}
        </RowWrapper>
      </GridWrapper>
    );
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.object,
};

export default PokemonList;
