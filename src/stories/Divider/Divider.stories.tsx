import { Meta, Story } from '@storybook/react';
import MyDivider from '../../components/BaseComponents/Divider';

export default {
   title: 'MyDivider',
   component: MyDivider,
   argTypes: {
      dashed: { type: 'boolean' },
   },
} as Meta;

export const Divider: Story = (args) => <MyDivider {...args} />;
