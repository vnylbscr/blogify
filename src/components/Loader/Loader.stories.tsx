import { Meta, Story } from '@storybook/react';
import Loader from './index';

export default {
   title: 'Loader',
   component: Loader,
   argTypes: {},
} as Meta;

export const LoaderStory: Story = (args) => <Loader {...args} />;


