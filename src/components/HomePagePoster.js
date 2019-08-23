import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import home from '../public/new-home-poster.jpg';

const Wrapper = styled.div`margin: 0 auto;`;
const ImageWrapper =  styled.img`
  position: absolute;
  width: 100%;
  height: auto;
`;
class HomePagePoster extends React.Component {
  render() {
    return (
      <Wrapper>
        <ImageWrapper src={home} alt="home" className="App-header" />
        <Loading />
      </Wrapper>
    );
  }
}

export default HomePagePoster;
