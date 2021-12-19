import { Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import Dialog from './index';

export default {
   title: 'Dialog',
   component: Dialog,
   argTypes: {
      open: {
         control: {
            type: 'radio',
         },
         options: [true, false],
      },
      fullScreen: {
         control: {
            type: 'radio',
         },
         options: [true, false],
      },
      fullWidth: {
         control: {
            type: 'radio',
         },
         options: [true, false],
      },
      dialogTitle: {
         type: 'string',
         required: true,
      },
      width: {
         type: 'number',
         required: false,
      },
      height: {
         type: 'number',
         required: false,
      },
   },
} as Meta;

export const DialogTemplate: Story = (args: any) => {
   return (
      <Dialog open={true} {...args}>
         <Typography> {args.children} </Typography>
      </Dialog>
   );
};

export const ExampleDialog = DialogTemplate.bind({});

ExampleDialog.args = {
   ...ExampleDialog.args,
   dialogTitle: 'Example Title',
   children: 'Example children',
   open: true,
};
