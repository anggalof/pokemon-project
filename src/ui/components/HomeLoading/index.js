import React from 'react';
import Loading from '../Loading';
import { Wrapper, ImageWrapper } from './styles';

class HomeLoading extends React.Component {
  render() {
    return (
      <Wrapper>
        <ImageWrapper src={process.env.PUBLIC_URL + '/img/new-home-poster.jpg'} alt="home" className="App-header" />
        <Loading />
      </Wrapper>
    );
  }
}

export default HomeLoading;
