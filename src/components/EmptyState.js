import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, size } from '../styles/theme';
import { H2, P } from './Text';

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  max-width: ${size.sm}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SH2 = styled(H2)`
  color: ${colors.primary};
  margin-bottom: 16px;
`;

const EmprtyState = ({ className }) => {
  return (
    <Container className={className}>
      <SH2>Welcome to GitHub Explorer</SH2>
      <br />
      <br />
      <P>Search for a GitHub username on the search bar above to see their public repositories!</P>
    </Container>
  );
};

EmprtyState.propTypes = {
  className: PropTypes.string
};

EmprtyState.defaultProps = {
  className: ''
};

export default EmprtyState;
