import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	padding-top: 25%;
  padding-bottom: 28%;
	text-align: center;
	@media (max-width: 680px) {
		margin-left: 0;
    margin-right: 0;
    padding-top: 80%;
    padding-bottom: 70%;
	}
`;
const rotate = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;
const Hourglass = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  left: 0;
  top: 0;
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 26px solid #cef;
    border-color: #cef transparent #cef transparent;
    animation: ${rotate} 1.2s infinite;
  }
`;

const Loading = (props) => {
  return (
    <Wrapper>
      <Hourglass />
    </Wrapper>
  );
};

export default Loading;
