import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';

export default {
  component: Button,
  title: 'Button'
};

const SButton = styled(Button)`
  width: 90%;
  max-width: 440px;
`;

export const normal = () => {
  return <SButton text="Text" onClick={action('Clicked')} />;
};

export const secondary = () => {
  return <SButton text="Text" onClick={action('Clicked')} secondary />;
};
