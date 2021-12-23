import { Meta, Story } from '@storybook/react';
import PostItem from './index';

export default {
   title: 'PostItem',
   component: PostItem,
   argTypes: {
      item: {
         type: 'object',
      },
   },
} as Meta;

export const Template: Story = (args: any) => (
   <PostItem
      {...args}
      item={{
         user: {
            username: 'mert',
         },
         createdAt: new Date(),
         content: 'example lasdlalsdlasdn ajnsdjan snjd',
         image: 'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
      }}
   />
);

export const PrimaryPostItem = Template.bind({});

PrimaryPostItem.args = {
   ...PrimaryPostItem.args,
   item: {
      user: {
         username: 'mert',
      },
      createdAt: new Date(),
      content: 'example lasdlalsdlasdn ajnsdjan snjd',
      image: 'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
   },
};
