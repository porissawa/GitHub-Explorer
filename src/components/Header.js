import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { H1 } from './Text';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

const SH1 = styled(H1)`
  margin-top: 40px;
  display: inline-block;
`;

const Header = ({ className }) => (
  <Container>
    <SLink to="/">
      <SH1>GitHub Explorer</SH1>
    </SLink>
  </Container>
);

export default Header;
