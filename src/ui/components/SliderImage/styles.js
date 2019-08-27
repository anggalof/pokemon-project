import styled from 'styled-components';
import { SB_GREEN } from '../../../utils/constants/StyleConstants';


export const SliderImageWrapper = styled.div`
  width: 100%;
  .slick-next,
  .slick-prev {
    display: none !important;
  }
  .slick-dots {
    @media (max-width: 550px) {
      bottom: 0px !important;
    }
    bottom: 0px !important;
    position: absolute;
    li {
      width: auto !important;
      button {
        padding: 0;
        @media (max-width: 550px) {
          width: 40px !important;
        }
        width: 20px !important;
        border-radius: 0;
        background-color: #fff;
        height: 5px;

        &:before {
          display: none;
        }
      }
      &.slick-active {
        button {
          background-color: ${SB_GREEN};
        }
      }
    }
  }
`;
export const ImageWrapper = styled.img`
  background: #a0a0a0;
  background-size: cover;
  width: 210px;
  height: 250px;
  float: left;
  @media (max-width: 670px) {
    text-align: center;
    float: none;
  }
`;
