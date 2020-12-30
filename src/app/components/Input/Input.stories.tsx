import React, { ComponentProps } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ComponentProps<typeof Input>> = args => (
  <Input {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: 'test22',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
