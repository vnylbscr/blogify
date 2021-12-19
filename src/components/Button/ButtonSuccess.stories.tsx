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

export const Template: Story = (args) => <ButtonSuccess {...args} />;

export const PrimaryButtonSuccess = Template.bind({});

PrimaryButtonSuccess.args = {
   label: 'This is an primary success buttons',
};
