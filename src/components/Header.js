import React from 'react';
import styled from 'styled-components';

import { H1 } from './Text';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const SH1 = styled(H1)`
  margin-top: 40px;
`;

const Header = ({ className }) => (
  <Container>
    <SH1>GitHub Explorer</SH1>
  </Container>
);

export default Header;
