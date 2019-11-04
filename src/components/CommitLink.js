import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, size } from '../styles/theme';
import { P } from './Text';

const Container = styled(Link)`
  width: 100%;
  max-width: ${size.sm}px;
  background-color: ${colors.secondaryLighter};
  border-bottom: 1px solid ${colors.grayLight};
  text-decoration: none;
  color: ${colors.grayDark};
  word-break: break-word;
`;

const Internal = styled.div`
  margin: 8px;
`;

const SP = styled(P)`
  color: ${colors.gray};
`;

const CommitLink = ({ className, message, author, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      <Internal>
        <SP>Message</SP>
        <P>{message}</P>
        <br />
        <SP>Author</SP>
        <P>{author}</P>
      </Internal>
    </Container>
  );
};

CommitLink.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

CommitLink.defaultProps = {
  className: '',
  onClick: () => {}
};

export default CommitLink;
