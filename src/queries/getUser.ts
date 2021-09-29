import { gql } from '@apollo/client';

export const GET_ME_WITH_TOKEN = gql`
   query getMeWithTokenQuery($getMeWithTokenToken: String!) {
      getMeWithToken(token: $getMeWithTokenToken) {
         _id
         username
         email
         posts {
            slug
            createdAt
            category
            comments {
               likedCount
               content
               _id
               createdAt
            }
            content
            title
            _id
         }
         token
         postCount
         photo
         phone
         aboutMe
         job
         school
         gender
         instagramUrl
         twitterUrl
         githubUrl
         createdAt
      }
   }
`;
