import { gql } from '@apollo/client';

export const ADD_POST_MUTATION = gql`
   mutation AddPostMutation(
      $userId: ID!
      $title: String!
      $content: String!
      $category: [String]
      $subtitle: String!
      $image: Upload!
   ) {
      addPost(
         data: {
            userId: $userId
            title: $title
            content: $content
            category: $category
            image: $image
            subtitle: $subtitle
         }
      ) {
         _id
         title
         subtitle
         content
         image
         comments {
            _id
            content
            likedCount
            createdAt
         }
         category
         createdAt
         slug
      }
   }
`;
