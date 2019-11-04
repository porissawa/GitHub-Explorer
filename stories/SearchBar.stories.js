import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';

import SearchBar from '../src/components/SearchBar';

export default {
  component: SearchBar,
  title: 'SearchBar',
  decorators: [withKnobs]
};

const SSearchBar = styled(SearchBar)`
  width: 90%;
  max-width: 440px;
`;

export const normal = () => {
  return <SSearchBar value={text('Search')} placeholder="Search for user" />;
};
