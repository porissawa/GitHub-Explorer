import React from 'react';

import { H1, H2, H3, P } from '../src/components/Text';

export default {
  component: H1,
  title: 'Text Elements'
};

export const TextElements = () => {
  return (
    <>
      <H1>This is an H1</H1>
      <H2>This is an H2</H2>
      <H3>This is an H3</H3>
      <P>This is a P</P>
    </>
  );
};
