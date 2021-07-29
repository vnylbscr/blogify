import { gql } from '@apollo/client';

export const USER_REGISTER_MUTATION = gql`
   mutation Register($username: String!, $email: String!, $password: String!) {
      register(input: { username: $username, email: $email, password: $password }) {
         id
         name
         token
         createdAt
         email
      }
   }
`;
