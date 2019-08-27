import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'styled-bootstrap-grid';

import PokemonList from './pokemon-list';
import {
  ItemWrapper,
  ItemContentWrapper,
  IconImageWrapper,
  Title,
  LabelType,
} from './styles';

class PokemonItem extends React.Component {
  render() {
    const { name } = this.props;
    const pokemonData = PokemonList.data;
    return (
      <ItemWrapper to={`/pokemon-detail/view/${name}`}>
        {pokemonData.map((item) => {
          if (name === item.name) {
            return (
              <ItemContentWrapper key={item.id}>
                <Title>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Title>
                <IconImageWrapper src={item.image} alt="icon" />
                <Row>
                  {item.types.map((type) => {
                    return (
                      <Col md={5} key={type.id}>
                        <LabelType color={type.color}>
                          {type.name}
                        </LabelType>
                      </Col>
                    );
                  })}
                </Row>
              </ItemContentWrapper>
            );
          }
          return null;
        })}
      </ItemWrapper>
    );
  }
}

PokemonItem.propTypes = {
  name: PropTypes.string,
};

export default PokemonItem;
