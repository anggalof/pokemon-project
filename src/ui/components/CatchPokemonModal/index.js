import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

import { ItemContentWrapper, Title, ImagePokemon } from './styles';

import PokemonList from '../PokemonItem/pokemon-list';
import ProgressBar from '../../pages/ProgressBar';

function CatchPokemonModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered={`${true}`}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Catch Pokemon
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {PokemonList.data.map((item) => {
          if (props.name === item.name) {
            return (
              <ItemContentWrapper key={item.id}>
                <Title>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Title>
                <ImagePokemon src={item.image} alt="pokemon" />
                <ProgressBar
                  title={`Congrats!!! You get a Pokemon ${item.name.charAt(0).toUpperCase() + item.name.slice(1)} from Catch Pokemon, <br />
                    Check your pokemonlist in button below`}
                  name={item.name}
                />
              </ItemContentWrapper>
            );
          }
          return null;
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

CatchPokemonModal.propTypes = {
  isOpen: PropTypes.bool,
  onHide: PropTypes.func,
};

export default CatchPokemonModal;
