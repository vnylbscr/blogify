import { gql } from '@apollo/client';
import { CORE_USER_FIELDS } from './fragments';

export const GET_ALL_POSTS_QUERY = gql`
   ${CORE_USER_FIELDS}
   query GetAllPosts {
      getAllPosts {
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
         user {
            ...CoreUserFields
         }
         category
         createdAt
         slug
      }
   }
`;
