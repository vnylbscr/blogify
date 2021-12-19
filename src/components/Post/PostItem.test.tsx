import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, fireEvent } from '@testing-library/react';
import PostItem from './index';
import faker from 'faker';
import { providerRender } from '../../test-utils';

describe('single post item test', () => {
   const mockData = {
      user: {
         username: faker.name.firstName(1),
      },
      content: faker.datatype.string(200),
      image: faker.image.imageUrl(),
   };

   test('should render post item properly', () => {
      const onClickMoreButton = jest.fn(() => {
         console.log('called more button');
      });
      const onClickLikeButton = jest.fn(() => {
         console.log('called like button');
      });

      const { debug } = providerRender(
         <PostItem item={mockData} onClickLikeButton={onClickLikeButton} onClickMoreButton={onClickMoreButton} />
      );

      debug();

      const moreVertBtn = screen.getByTestId(/more-vert-button/i);
      const favoriteBtn = screen.getByTestId(/favorites-button/i);

      fireEvent.click(moreVertBtn);
      fireEvent.click(favoriteBtn);
      // userEvent.click(moreVertBtn);
      // userEvent.click(favoriteBtn);

      expect(onClickMoreButton).toHaveBeenCalled();
      expect(onClickLikeButton).toHaveBeenCalled();
   });
});
