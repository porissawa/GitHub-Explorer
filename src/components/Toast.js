import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../styles/theme';

const ShowToast = keyframes`
  0% {
    bottom: 0; opacity: 0; visibility: visible;
  }
  30% {
    bottom: 30px; opacity: 1;
  }
  70% {
    bottom: 30px; opacity: 1;
  }
  100% {
    bottom: 0; opacity: 0; visibility: hidden;
  }
`;

const ToastContainer = styled.div`
  visibility: hidden;
  position: fixed;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${colors.alert};
  color: white;
  text-align: center;
  animation: ${ShowToast} 3s ease-in-out 0.2s 1 forwards;
  -moz-animation: ${ShowToast} 3s ease-in-out 0.2s 1 forwards;
  -webkit-animation: ${ShowToast} 3s ease-in-out 0.2s 1 forwards;
`;

const Toast = ({ className, children }) => (
  <ToastContainer className={className}>{children}</ToastContainer>
);

Toast.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

Toast.defaultProps = {
  className: '',
  children: ''
};

export default Toast;
