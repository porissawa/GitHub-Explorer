import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../styles/theme';

const LoadingState = keyframes`
  0% {
    background: linear-gradient(94deg, rgba(234,234,234,1) 0%, rgba(182,235,219,1) -30%, rgba(234,234,234,1) 100%);
  }
  25% {
    background: linear-gradient(94deg, rgba(234,234,234,1) 0%, rgba(182,235,219,1) 25%, rgba(234,234,234,1) 100%);
  }
  50% {
    background: linear-gradient(94deg, rgba(234,234,234,1) 0%, rgba(182,235,219,1) 50%, rgba(234,234,234,1) 100%);
  }
  75% {
    background: linear-gradient(94deg, rgba(234,234,234,1) 0%, rgba(182,235,219,1) 75%, rgba(234,234,234,1) 100%);
  }
  100% {
    background: linear-gradient(94deg, rgba(234,234,234,1) 0%, rgba(182,235,219,1) 130%, rgba(234,234,234,1) 100%);   
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5px;
  background-color: ${colors.secondary};
  animation: ${LoadingState} 1s infinite;
  -moz-animation: ${LoadingState} 1s infinite;
  -webkit-animation: ${LoadingState} 1s infinite;
`;

const LoadingBar = ({ className }) => <Container className={className} />;

LoadingBar.propTypes = {
  className: PropTypes.string
};

LoadingBar.defaultProps = {
  className: ''
};

export default LoadingBar;
