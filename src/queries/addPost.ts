import { gql } from '@apollo/client';

export const ADD_POST_MUTATION = gql`
   mutation AddPostMutation($addPostInput: PostInput) {
      addPost(input: $addPostInput) {
         _id
         title
         content
         category
         createdAt
         slug
      }
   }
`;
