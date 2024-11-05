import React from 'react';
import Loading from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
};

const Template = args => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};
