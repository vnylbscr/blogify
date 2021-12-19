import { Meta, Story } from '@storybook/react';
import Typography from './Typography';

export default {
   title: 'Typography',
   component: Typography,
   argTypes: {
      label: { type: 'string', required: true },
   },
} as Meta;

export const PrimaryTypography: Story = (args) => <Typography {...args} />;
