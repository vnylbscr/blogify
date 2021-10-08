import { gql } from '@apollo/client';

export const CORE_USER_FIELDS = gql`
   fragment CoreUserFields on User {
      username
      _id
      photo
   }
`;

export const USER_URL_FIELDS = gql`
   fragment UserUrlFields on User {
      githubUrl
      twitterUrl
      instagramUrl
   }
`;
