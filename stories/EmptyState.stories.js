import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import EmptyState from '../src/components/EmptyState';

export default {
  component: EmptyState,
  title: 'EmptyState'
};

export const normal = () => {
  return <EmptyState />;
};
