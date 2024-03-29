import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'styled-bootstrap-grid';

import SliderImage from '../../components/SliderImage';
import Charts from '../../components/Charts';
import Legend from '../../components/Legend';
import CatchPokemonModal from '../../components/CatchPokemonModal';

import {
  SliderWrapper,
  TitleWrapper,
  Line,
  DetailWrapper,
  ButtonCatchPokemonWrapper,
  IconCatchPokemon,
  ButtonCatchPokemon,
  TitleDetailWrapper,
  OverviewWrapper,

  CategoryDetailWrapper,
  LabelCategoryDetail,
  LabelWrapper,
  LabelAbilities,
  LabelType,
  GenderFemaleImage,
  GenderMaleImage,
} from './styles';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C', '#3DC7EF'],
      isOpen: false,
      pokemonName: '',
    }
  }
  componentDidMount() {
    this.populateStats();
  }
  populateStats = () => {
    const { stats } = this.props;
    let data = [];

    data.push(stats);

    this.setState({ data: data });
  };
  handleOpenModal = (open, name) => {
    this.setState({ isOpen: open, pokemonName: name });
  };
  handleHideModal = (hide) => {
    this.setState({ isOpen: hide});
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

	  return (
      <div>
        <TitleWrapper>{name.charAt(0).toUpperCase() + name.slice(1)}</TitleWrapper>
        <Line />
        <CatchPokemonModal
          show={this.state.isOpen}
          onHide={() => this.handleHideModal(false)}
          name={this.state.pokemonName}
        />
        <DetailWrapper>
          <Row>
            <Col md={3}>
              <SliderWrapper>
                <SliderImage files={image} />
                <ButtonCatchPokemonWrapper
                  className="clearfix"
                  onClick={() => this.handleOpenModal(true, name)}
                >
                  <IconCatchPokemon src={process.env.PUBLIC_URL + '/img/pokemon-icon.jpg'} alt="catch" />
                  <ButtonCatchPokemon>Catch Pokemon</ButtonCatchPokemon>
                </ButtonCatchPokemonWrapper>
              </SliderWrapper>
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
                <Col md={12}>
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
                <Col md={12}>
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
                <Col md={12}>
                  <OverviewWrapper>
                    <TitleDetailWrapper>Stats</TitleDetailWrapper>
                    <Row>
                      <Col md={8}>
                        <Charts
                          data={this.state.data}
                          colors={this.state.colors}
                          height={250}
                        />
                      </Col>
                      <Col md={4}>
                        <Legend data={this.state.data} colors={this.state.colors} />
                      </Col>
                    </Row>
                  </OverviewWrapper>
                </Col>
              </Row>
            </Col>
          </Row>
        </DetailWrapper>
      </div>
    );
  }
}

MainContent.propTypes = {
  name: PropTypes.string,
  abilities: PropTypes.array,
  types: PropTypes.array,
  image: PropTypes.object,
  weight: PropTypes.number,
  height: PropTypes.number,
};

export default MainContent;
