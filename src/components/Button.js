import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, size } from '../styles/theme';
import { P } from './Text';

const Container = styled.div`
  width: 100%;
  max-width: ${size.sm}px;
  height: 48px;
  border: none;
  box-shadow: 0px 2px 8px -4px rgba(150, 150, 150, 0.75);
  border-radius: 8px;
  background-color: ${props => (props.secondary ? colors.secondary : colors.primary)};
  text-align: left;
  cursor: pointer;
`;

const SP = styled(P)`
  padding: 8px;
`;

const Button = ({ className, text, secondary, onClick }) => {
  return (
    <Container className={className} onClick={onClick} secondary={secondary}>
      <SP>{text}</SP>
    </Container>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  secondary: PropTypes.bool
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  secondary: false
};

export default Button;
