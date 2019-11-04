import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../styles/theme';

const StyledH1 = styled.h1`
  margin: 0;
  font-family: ${fonts.titleFamily};
  font-size: 24px;
  font-weight: 300;
  color: ${colors.primary};
`;

const H1 = ({ className, children }) => {
  return <StyledH1 className={className}>{children}</StyledH1>;
};

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

H1.defaultProps = {
  className: ''
};

export default H1;
