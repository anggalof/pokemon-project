import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'styled-bootstrap-grid';
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
              <Col md={2} xs={6} key={item.url}>
                <PokemonItem name={item.name} url={item.url} />
              </Col>
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
