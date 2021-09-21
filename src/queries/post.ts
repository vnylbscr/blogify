import { gql } from '@apollo/client';

export const GET_ALL_POSTS_QUERY = gql`
   query GetAllPosts {
      getAllPosts {
         id
         title
         subtitle
         content
         media
         author {
            userID
            name
         }
         comments {
            id
            author {
               name
            }
            comment
            likeCount
            createdAt
         }
         category
         createdAt
      }
   }
`;
