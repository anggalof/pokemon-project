import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import { SliderImageWrapper, ImageWrapper, } from './styles';

class SliderImage extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    const { files } = this.props;
    return (
      <SliderImageWrapper>
        <Slider {...settings}>
          <ImageWrapper src={files.front_default} alt="front-default" />
          <ImageWrapper src={files.front_shiny} alt="front-shiny" />
          <ImageWrapper src={files.back_default} alt="back-default" />
          <ImageWrapper src={files.back_shiny} alt="back-shiny" />
        </Slider>
      </SliderImageWrapper>
    );
  }
}
SliderImage.propTypes = {
  files: PropTypes.object,
};
export default SliderImage;
