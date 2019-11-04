import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, size } from '../styles/theme';
import { P } from './Text';

const Container = styled(Link)`
  width: 100%;
  max-width: ${size.sm}px;
  background-color: ${colors.primaryLighter};
  border-bottom: 1px solid ${colors.grayLight};
  text-decoration: none;
  color: ${colors.grayDark};
  word-break: break-all;
`;

const Internal = styled.div`
  margin: 8px;
`;

const BranchLinks = ({ className, text, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      <Internal>
        <P>{text}</P>
      </Internal>
    </Container>
  );
};

BranchLinks.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

BranchLinks.defaultProps = {
  className: '',
  onClick: () => {}
};

export default BranchLinks;
