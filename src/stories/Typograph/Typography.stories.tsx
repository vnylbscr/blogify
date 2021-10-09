import { Meta, Story } from '@storybook/react';
import Typography from './Typography';

export default {
   title: 'Typography',
   component: Typography,
} as Meta;

export const PrimaryTypography: Story = (args) => <Typography {...args} />;
