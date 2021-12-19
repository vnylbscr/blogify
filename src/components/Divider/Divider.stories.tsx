import { Meta, Story } from '@storybook/react';
import MyDivider from '.';

export default {
   title: 'MyDivider',
   component: MyDivider,
   argTypes: {
      dashed: { type: 'radio', options: [true, false] },
   },
} as Meta;

export const Divider: Story = (args) => <MyDivider {...args} />;
