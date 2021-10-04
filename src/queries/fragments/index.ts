import { gql } from '@apollo/client';

export const CORE_USER_FIELDS = gql`
   fragment CoreUserFields on User {
      username
      _id
      photo
      githubUrl
      twitterUrl
   }
`;
