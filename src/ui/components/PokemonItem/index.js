import React from 'react';
import PropTypes from 'prop-types';

import { ItemWrapper, IconImageWrapper, Title, ItemContentWrapper } from './styles';

class PokemonItem extends React.Component {
  render() {
    const { name } = this.props;
    let image = '';
    let grass = '';
    let poison = '';
    let fire = '';
    let flying = '';
    let water = '';
    let bug = '';
    if (name === 'bulbasaur') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';
      grass = 'grass';
      poison = 'poison';
    } else if (name === 'ivysaur') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png';
      grass = 'grass';
      poison = 'poison';
    } else if (name === 'venusaur') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png';
      grass = 'grass';
      poison = 'poison';
    } else if (name === 'charmander') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png';
      fire = 'fire';
    } else if (name === 'charmeleon') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png';
      fire = 'fire';
    } else if (name === 'charizard') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png';
      flying = 'flying';
    } else if (name === 'squirtle') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png';
      water = 'water';
    } else if (name === 'wartortle') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png';
      water = 'water';
    } else if (name === 'blastoise') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png';
      water = 'water';
    } else if (name === 'caterpie') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png';
      bug = 'bug';
    } else if (name === 'metapod') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png';
      bug = 'bug';
    } else if (name === 'butterfree') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png';
      bug = 'bug';
      flying = 'flying';
    } else if (name === 'weedle') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png';
      bug = 'bug';
      poison = 'poison';
    } else if (name === 'kakuna') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png';
      bug = 'bug';
      poison = 'poison';
    } else if (name === 'beedrill') {
      image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png';
      bug = 'bug';
      poison = 'poison';
    }

    return (
      <ItemWrapper to={`/pokemon-detail/view/${name}`}>
        <ItemContentWrapper>
            <IconImageWrapper src={image} alt="icon" />
            <Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Title>
        </ItemContentWrapper>
      </ItemWrapper>
    );
  }
}

PokemonItem.propTypes = {
    name: PropTypes.string,
};

export default PokemonItem;
