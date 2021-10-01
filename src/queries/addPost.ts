import { gql } from '@apollo/client';

export const ADD_POST_MUTATION = gql`
   mutation AddPostMutation($userId: ID!, $title: String!, $content: String!, $category: [String], $image: Upload!) {
      addPost(data: { userId: $userId, title: $title, content: $content, cetegory: $category, image: $image }) {
         _id
         title
         content
         category
         createdAt
         slug
      }
   }
`;
