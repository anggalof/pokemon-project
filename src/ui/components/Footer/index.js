import React, { Component } from 'react'
import { FooterWrapper, Copy, ImageWrapper, CopyRight } from './styles';

class Footer extends Component {
  render() {
    let dateRight = new Date();
    dateRight = dateRight.getFullYear();
    return (
      <FooterWrapper>
        <Copy>
          <div className="container-fluid">
            <ImageWrapper>
              <CopyRight>&copy; {dateRight} All Right Reserved.</CopyRight>
            </ImageWrapper>
          </div>
        </Copy>
      </FooterWrapper>
    )
  }
}

export default Footer;
