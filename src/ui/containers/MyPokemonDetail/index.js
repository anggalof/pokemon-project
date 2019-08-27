import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'styled-bootstrap-grid';

import PokemonList from '../../components/PokemonItem/pokemon-list';

import {
  ItemContentWrapper,
  ImagePokemonWrapper,
  NicknameTitle,
  TitleWrapper,
  Line,
  DetailWrapper,
  TitleDetailWrapper,
  TitleNicknameWrapper,
  CategoryDetailWrapper,
  LabelCategoryDetail,
  LabelWrapper,
  LabelAbilities,
  LabelType,
  GenderFemaleImage,
  GenderMaleImage,
  InputWrapper,
  Input,
  ButtonChangeName,
} from './styles';

class MyPokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      pokemonName: '',
    }
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    this.setState({ pokemonName: this.state.value });
    event.preventDefault();
  };
  render() {
    const {
      name,
      abilities,
      image,
      types,
      weight,
      height,
    } = this.props;
    const pokemonData = PokemonList.data;
	  return (
      <div>
        {this.state.pokemonName ? (
          <NicknameTitle>Nickname: {this.state.pokemonName}</NicknameTitle>
        ) : (
          <TitleWrapper>{name.charAt(0).toUpperCase() + name.slice(1)}</TitleWrapper>
        )}
        <Line />
        <DetailWrapper>
          <Row>
            <Col md={3}>
              {pokemonData.map((item) => {
                if (name === item.name) {
                  return (
                    <ItemContentWrapper key={item.id}>
                      <ImagePokemonWrapper src={item.image} alt="icon" />
                    </ItemContentWrapper>
                  );
                }
                return null;
              })}
            </Col>
            <Col md={9}>
              <Row>
                <Col md={12}>
                  <CategoryDetailWrapper>
                    <Row>
                      <Col md={6} xs={6}>
                        <TitleDetailWrapper>Height</TitleDetailWrapper>
                        <LabelCategoryDetail>{height} </LabelCategoryDetail>
                      </Col>
                      <Col md={6} xs={6}>
                        <TitleDetailWrapper>Weight</TitleDetailWrapper>
                        <LabelCategoryDetail>{weight} Lbs</LabelCategoryDetail>
                      </Col>
                    </Row>
                  </CategoryDetailWrapper>
                </Col>
                <Col md={4} xs={12}>
                  <TitleDetailWrapper>Abilities</TitleDetailWrapper>
                  <LabelWrapper className="clearfix">
                    {abilities.map((item, index) => {
                      return (
                        <LabelAbilities key={item.ability.url} index={index}>
                          {item.ability.name}
                        </LabelAbilities>
                      );
                    })}
                  </LabelWrapper>
                </Col>
                <Col md={8} xs={12}>
                  <TitleDetailWrapper>Type</TitleDetailWrapper>
                  <LabelWrapper className="clearfix">
                    {types.map((item) => {
                      return (
                        <LabelType key={item.type.url} name={item.type.name}>
                          {item.type.name}
                        </LabelType>
                      );
                    })}
                  </LabelWrapper>
                </Col>
                <Col md={12}>
                  <TitleDetailWrapper>Gender</TitleDetailWrapper>
                  {image && image.back_female && (
                    <GenderFemaleImage src={process.env.PUBLIC_URL + '/img/pokemon-female-icon.png'} alt="female" />
                  )}
                  {image && image.back_default && (
                    <GenderMaleImage src={process.env.PUBLIC_URL + '/img/pokemon-male-icon.png'} alt="male" />
                  )}
                </Col>
              </Row>
            </Col>
            {this.state.pokemonName ? (
              ''
            ) : (
              <Col md={12}>
                <Line />
                <TitleNicknameWrapper>Add a nickname for this pokemon</TitleNicknameWrapper>
                <form onSubmit={this.handleSubmit}>
                  <InputWrapper>
                    <Input type="text" onChange={this.handleChange} name="nickname" /><br />
                    <ButtonChangeName type="submit">Save</ButtonChangeName>
                  </InputWrapper>
                </form>
              </Col>
            )}
          </Row>
        </DetailWrapper>
      </div>
    );
  }
}

MyPokemonDetail.propTypes = {
  name: PropTypes.string,
  abilities: PropTypes.array,
  types: PropTypes.array,
  image: PropTypes.object,
  weight: PropTypes.number,
  height: PropTypes.number,
};

export default MyPokemonDetail;
