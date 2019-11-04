import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../styles/theme';

const StyledP = styled.p`
  margin: 0;
  font-family: ${fonts.textFamily};
  font-size: 14px;
  color: ${colors.grayDarker};
`;

const P = ({ className, children }) => {
  return <StyledP className={className}>{children}</StyledP>;
};

P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

P.defaultProps = {
  className: ''
};

export default P;
