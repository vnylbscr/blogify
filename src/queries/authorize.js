import { gql } from '@apollo/client';

export const USER_LOGIN_MUTATION = gql`
   mutation Login($email: String!, $password: String!) {
      login(input: { email: $email, password: $password }) {
         id
         name
         token
         createdAt
         email
      }
   }
`;
