import { Meta, Story } from '@storybook/react';
import CustomAvatar from '../../components/Avatar';

export default {
   title: 'CustomAvatar',
   component: CustomAvatar,
   argTypes: {
      color: {
         options: ['orange', 'purple', 'red'],
         control: { type: 'radio' },
      },
      showBadge: {
         type: 'boolean',
      },
   },
} as Meta;

export const Avatar: Story = (args) => <CustomAvatar {...args} />;
