import { gql } from '@apollo/client';

export const GET_ALL_POSTS_QUERY = gql`
   query GetAllPosts {
      getAllPosts {
         _id
         title
         content
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
