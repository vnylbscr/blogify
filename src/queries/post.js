import { gql } from '@apollo/client';

export const GET_ALL_POSTS_QUERY = gql`
   query Query {
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
