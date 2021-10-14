import { gql } from '@apollo/client';

export const GET_SINGLE_POST = gql`
   query getSinglePostQuery($_id: ID!) {
      getPost(_id: $_id) {
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
         user {
            _id
            username
            email
         }
         slug
         likedCount
         commentCount
         likedUsers {
            _id
            username
            email
            aboutMe
            job
            location {
               country
               city
            }
         }
      }
   }
`;
