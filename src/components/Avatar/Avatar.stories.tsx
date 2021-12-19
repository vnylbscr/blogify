import { Meta, Story } from '@storybook/react';
import CustomAvatar from '.';

export default {
   title: 'CustomAvatar',
   component: CustomAvatar,
   argTypes: {
      color: {
         options: ['orange', 'purple', 'red'],
         control: { type: 'radio' },
      },
      showBadge: {
         control: { type: 'radio', options: [true, false] },
      },
      children: {
         type: { name: 'string', required: false },
      },
   },
} as Meta;

export const Avatar: Story = (args) => <CustomAvatar {...args} />;
