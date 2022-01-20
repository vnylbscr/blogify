import { gql } from '@apollo/client';

export const GET_USER_POSTS = gql`
   query getUserPostsQuery($getUserPostsUser: ID!) {
      getUserPosts(user: $getUserPostsUser) {
         _id
         title
         content
         image
         subtitle
         comments {
            _id
            content

            createdAt
         }
         category
         createdAt
         slug
      }
   }
`;
