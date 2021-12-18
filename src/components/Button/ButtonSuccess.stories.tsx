import { Meta, Story } from '@storybook/react';
import ButtonSuccess from './ButtonSuccess';

export default {
   title: 'ButtonSuccess',
   component: ButtonSuccess,
   argTypes: {
      fullWidth: {
         options: [true, false],
         control: { type: 'radio' },
      },
      capitalize: {
         options: [true, false],
         control: { type: 'radio' },
      },
      label: {
         type: { name: 'string', required: false },
      },
   },
} as Meta;

export const ButtonSuccessStory: Story = (args) => <ButtonSuccess {...args} />;
