import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { size } from '../styles/theme';
import { H3, P } from './Text';
import { formatNumber } from '../util/helpers';

const Container = styled.div`
  width: 100%;
  max-width: ${size.sm}px;
  box-shadow: 0px 2px 8px -4px rgba(150, 150, 150, 0.75);
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 2px 8px -4px rgba(80, 80, 80, 1);
  }
`;

const ChildrenContainer = styled.div`
  margin: 8px;
  padding: 8px;
`;

const SH3 = styled(H3)`
  word-break: break-all;
`;

const Info = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Repository = ({ className, name, creationDate, stars, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      <ChildrenContainer>
        <SH3>{name}</SH3>
        {creationDate && (
          <Info>
            <P>{creationDate}</P>
            <P>Stars: {formatNumber(stars)}</P>
          </Info>
        )}
      </ChildrenContainer>
    </Container>
  );
};

Repository.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Repository.defaultProps = {
  className: '',
  onClick: () => {}
};

export default Repository;
