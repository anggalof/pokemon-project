import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, LabelBaseStats, LabelStats } from './styles';

class Charts extends React.Component {
  render() {
    let self = this,
      data = this.props.data,
      opaque = this.props.opaque,
      max = 0;

    for (let i = data.length; i--; ) {
      for (let j = data[i].length; j--; ) {
        if (data[i][j].base_stat > max) {
          max = data[i][j].base_stat;
        }
      }
    }

    return (
      <Wrapper className={ 'Charts' + (this.props.horizontal ? ' horizontal' : '' ) }>
        {data.map((serie, serieIndex) => {
          return (
            <div className={ 'Charts--serie ' + (self.props.grouping) }
                 key={serieIndex}
                 style={{ height: self.props.height ? self.props.height: 'auto' }}
            >
              {serie.map((item, itemIndex) => {
                let color = self.props.colors[itemIndex], style,
                  size = item.base_stat / max * 100;

                style = {
                  backgroundColor: color,
                  opacity: opaque ? 1 : (item.base_stat/max + .05),
                  zIndex: item.base_stat
                };
                style['height'] = size + '%';
                return (
                  <div
                    key={itemIndex}
                    className={'Charts--item ' + (self.props.grouping)}
                    style={style}
                  >
                    <LabelBaseStats style={{color: color}}>{item.base_stat}</LabelBaseStats>
                    <LabelStats>{item.stat.name}</LabelStats>
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

Charts.propTypes = {
  data: PropTypes.array,
  opaque: PropTypes.string,
};

export default Charts;
