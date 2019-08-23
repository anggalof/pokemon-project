import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import styled from 'styled-components';
import arrowNext from '../../../public/arrow-next.png';
import arrowPrev from '../../../public/arrow-prev.png';

const MovieWrapper = styled.div`padding: 0 15px;`;
const SliderWrapper = styled(Slider)``;
const ArrowIconNext = styled.img`right: -17px !important;`;
const ArrowIconPrev = styled.img`left: -17px !important;`;
class MovieSlider extends React.Component {
  render() {
    const { data } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <ArrowIconNext src={arrowNext} />,
      prevArrow: <ArrowIconPrev src={arrowPrev} />,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 548,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 744,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1128,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ]
    };
    return (
      <SliderWrapper {...settings}>
        {data.results.map((item) => {
          return (
            <MovieWrapper key={item.id}>
              <MovieItem
                title={item.title}
                movieId={item.id}
                popularity={item.popularity}
                posterPath={item.poster_path}
                overview={item.overview}
                voteAverage={item.vote_average}
              />
            </MovieWrapper>
          );
        })}
      </SliderWrapper>
    );
  }
}

MovieSlider.propTypes = {
  data: PropTypes.object,
};
export default MovieSlider;
