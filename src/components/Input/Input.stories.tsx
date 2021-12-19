import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../lib/constants';
import Input from './Input';

export default {
   title: 'Input',
   component: Input,
   argTypes: {
      fullWidth: {
         control: {
            type: 'radio',
         },
         options: [true, false],
      },
      label: {
         type: 'string',
         required: false,
      },
      helperText: {
         type: 'string',
         required: false,
      },
      placeholder: {
         type: 'string',
         required: false,
      },
      type: {
         type: 'radio',
         options: ['text', 'password', 'file'],
      },
      rules: {},
   },
} as Meta;

export const CustomInputTemplate: Story = (args: any) => {
   const {
      control,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
         [args.name]: '',
      },
   });

   return <Input error={errors[args.name]} name={args.name} rules={args.rules} control={control} {...args} />;
};

export const PrimaryCustomInput = CustomInputTemplate.bind({});
export const PasswordCustomInput = CustomInputTemplate.bind({});

PasswordCustomInput.args = {
   ...PasswordCustomInput.args,
   label: 'password',
   placeholder: 'Please enter your password',
   name: 'password',
   rules: {
      required: true,
   },
   type: 'password',
};

PrimaryCustomInput.args = {
   ...PrimaryCustomInput.args,
   label: 'email',
   placeholder: 'Please enter your email',
   name: 'email',
   rules: {
      required: 'Please a valid email',
      pattern: {
         value: EMAIL_REGEX,
         message: 'Please provide a valid e-mail address',
      },
   },
};
