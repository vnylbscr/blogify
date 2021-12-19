import { Meta, Story } from '@storybook/react';
import SearchBar from './index';

export default {
   title: 'SearchBar',
   component: SearchBar,
   argTypes: {
      size: {
         control: {
            type: 'radio',
         },
         options: ['small', 'medium'],
      },
   },
} as Meta;

export const SearchBarStory: Story = (args: any) => {
   return <SearchBar {...args} />;
};
