import { gql } from '@apollo/client';

export const USER_LOGIN_MUTATION = gql`
   mutation LoginMutation($email: String!, $password: String!) {
      login(input: { email: $email, password: $password }) {
         _id
         username
         email
         posts {
            _id
            title
            content
            comments {
               _id
               content
               likedCount
               createdAt
            }
            category
            createdAt
            slug
         }
      }
   }
`;
