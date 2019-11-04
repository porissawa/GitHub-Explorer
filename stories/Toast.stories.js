import React from 'react';

import Toast from '../src/components/Toast';

export default {
  component: Toast,
  title: 'Toast'
};

export const AlertToast = () => {
  return <Toast>User not found</Toast>;
};
