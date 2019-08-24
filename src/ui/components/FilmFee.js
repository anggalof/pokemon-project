import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

class FilmFee extends React.Component {
  render() {
    const { voteAverage } = this.props;
    let price = '';
    if (voteAverage < 3 || voteAverage === 3) {
      price = '3.500';
    } else if ((voteAverage > 3 && voteAverage < 6) || voteAverage === 6) {
      price = '8.250';
    } else if ((voteAverage > 6 && voteAverage < 8) || voteAverage === 8) {
      price = '16.350';
    } else if (voteAverage > 8) {
      price = '21.250';
    }
    return (
        <NumberFormat value={price} displayType="text" thousandSeparator prefix={'IDR '} />
    );
  }
}
FilmFee.propTypes = {
  voteAverage: PropTypes.number,
};
export default FilmFee;
