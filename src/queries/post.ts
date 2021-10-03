import { gql } from '@apollo/client';

export const GET_ALL_POSTS_QUERY = gql`
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
            likedCount
            createdAt
         }
         user {
            username
            _id
            photo
            githubUrl
            twitterUrl
         }
         category
         createdAt
         slug
      }
   }
`;
