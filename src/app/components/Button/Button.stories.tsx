import React, { ComponentProps } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args}> Button </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  outline: false,
};
export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  outline: false,
};
export const Danger = Template.bind({});
Danger.args = {
  danger: true,
  outline: false,
};
export const Success = Template.bind({});
Success.args = {
  success: true,
  outline: false,
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};
