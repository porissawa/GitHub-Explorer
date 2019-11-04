import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../styles/theme';

const StyledH2 = styled.h2`
  margin: 0;
  font-family: ${fonts.titleFamily};
  font-size: 20px;
  font-weight: 700;
  color: ${colors.gray};
`;

const H2 = ({ className, children }) => {
  return <StyledH2 className={className}>{children}</StyledH2>;
};

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

H2.defaultProps = {
  className: ''
};

export default H2;
