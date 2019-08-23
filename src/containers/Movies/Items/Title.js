import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleText = styled.div`
  margin-top: 0;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
class Title extends React.Component {
  render() {
    return (
      <TitleText>
        {this.props.title}
      </TitleText>
    );
  }
}
Title.propTypes = {
  title: PropTypes.string,
};
export default Title;
