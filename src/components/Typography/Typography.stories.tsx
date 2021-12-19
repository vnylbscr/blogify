import { Meta, Story } from '@storybook/react';
import MyTypography from './index';

export default {
   title: 'MyTypography',
   component: MyTypography,
   argTypes: {
      bold: {
         control: { type: 'radio' },
         options: [true, false],
      },
      margin: {
         control: { type: 'radio' },
         options: [true, false],
      },
      animationDirection: {
         control: {
            type: 'radio',
         },
         options: ['left', 'right'],
      },
      children: {
         type: 'string',
         required: true,
      },
   },
} as Meta;

export const TypographyTemplate: Story = (args: any) => {
   return <MyTypography {...args} />;
};

export const PrimaryTypography = TypographyTemplate.bind({});

PrimaryTypography.args = {
   ...PrimaryTypography.args,
   children: 'typography example',
   animationDirection: '',
};
