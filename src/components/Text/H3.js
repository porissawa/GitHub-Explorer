import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../styles/theme';

const StyledH3 = styled.h3`
  margin: 0;
  font-family: ${fonts.titleFamily};
  font-size: 18px;
  font-weight: 400;
  color: ${colors.grayDark};
`;

const H3 = ({ className, children }) => {
  return <StyledH3 className={className}>{children}</StyledH3>;
};

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

H3.defaultProps = {
  className: ''
};

export default H3;
