import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import faker from 'faker';
import React from 'react';
import { providerRender } from '../../test-utils';
import PostItem from './index';

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

      providerRender(
         <PostItem item={mockData} onClickLikeButton={onClickLikeButton} onClickMoreButton={onClickMoreButton} />
      );

      const moreVertBtn = screen.getByTestId(/more-vert-button/i);
      const favoriteBtn = screen.getByTestId(/favorites-button/i);

      fireEvent.click(moreVertBtn);
      fireEvent.click(favoriteBtn);

      expect(onClickMoreButton).toHaveBeenCalled();
      expect(onClickLikeButton).toHaveBeenCalled();
   });
});
