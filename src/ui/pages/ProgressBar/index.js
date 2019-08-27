import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ShellProgressBar,
  PercentageWrapper,
  CountPercentage,
  Title,
  ButtonRedirect,
  ProcessCatchPokemon,
  RedirectLink,
} from './styles';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 25,
      render: false,
    };
  }
  componentDidMount() {
    setTimeout(function() {
        this.setState({ render: true })
    }.bind(this), 3000)
  }
  render() {
    const { title, name } = this.props;
    const progress = {
      width: "85%"
    }
    let progressBar = this.state.progress;
    return (
      <div>
        {!this.state.render ? (
          <React.Fragment>
            <Wrapper>
              <ShellProgressBar>
                <PercentageWrapper style={ progress }>
                  <CountPercentage>{progressBar < 100 && progressBar + 60 + "%"}</CountPercentage>
                </PercentageWrapper>
              </ShellProgressBar>
            </Wrapper>
            <ProcessCatchPokemon>PROCESSING CATCH POKEMON ...</ProcessCatchPokemon>
          </React.Fragment>
        ) : (
          <div>
            <Title dangerouslySetInnerHTML={{__html: title}}></Title>
            <RedirectLink to={`/my-pokemon-list/${name}`}>
              <ButtonRedirect>My Pokemon List</ButtonRedirect>
            </RedirectLink>
          </div>
        )}
      </div>
    );
  }
}
ProgressBar.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

export default ProgressBar;
