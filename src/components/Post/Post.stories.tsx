import { Meta, Story } from '@storybook/react';
import PostItem from './index';

export default {
   title: 'PostItem',
   component: PostItem,
   argTypes: {
      item: {},
   },
} as Meta;

export const PostItemStory: Story<typeof PostItem> = (args) => (
   <PostItem
      item={{
         user: {
            username: 'mert',
         },
         createdAt: new Date(),
         content: 'merto lasdlalsdlasdn ajnsdjan snjd',
      }}
      {...args}
   />
);

export const PrimaryPostItem = PostItemStory.bind({});

PrimaryPostItem.args = {
   ...PrimaryPostItem.args,
   item: {
      user: {
         username: 'mert',
      },
      createdAt: new Date(),
      content: 'merto lasdlalsdlasdn ajnsdjan snjd',
   },
};
