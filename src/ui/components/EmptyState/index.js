import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ContentWrapper, CenteredH3 } from './styles';

function EmptyState(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <CenteredH3>
          {props.message || 'DATA TIDAK TERSEDIA'}
        </CenteredH3>
      </ContentWrapper>
    </Wrapper>
  );
}

EmptyState.propTypes = {
  message: PropTypes.string,
};

export default EmptyPage;
