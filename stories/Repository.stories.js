import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';

import Repository from '../src/components/Repository';

export default {
  component: Repository,
  title: 'Repo',
  decorators: [withKnobs]
};

export const normal = () => {
  return (
    <Repository
      name={text('name', 'nome-do-repositorio')}
      creationDate="25/09/2019"
      stars="100000"
    />
  );
};
