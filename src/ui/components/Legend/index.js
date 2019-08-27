import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

class Legend extends React.Component {
  render() {
    const { data, colors } = this.props;
    return (
      <Wrapper className="Legend">
        {data.map((serie, serieIndex) => {
          return (
            <div key={serieIndex}>
              {serie.map((label, labelIndex) => {
                return (
                  <div key={labelIndex}>
                    <span className="Legend--color" style={{backgroundColor: colors[labelIndex % colors.length]}} />
                    <span className="Legend--label">{label.stat.name}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Wrapper>
    );
  }
}

Legend.propTypes = {
  data: PropTypes.array,
  colors: PropTypes.array,
};

export default Legend;
