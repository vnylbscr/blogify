import { gql } from '@apollo/client';

export const USER_LOGIN_MUTATION = gql`
   mutation LoginMutation($email: String!, $password: String!) {
      login(input: { email: $email, password: $password }) {
         _id
         username
         email
         posts {
            _id
            content
            title
            image
            subtitle
            comments {
               _id
               content

               createdAt
            }
            category
            createdAt
            slug
         }
         token
         postCount
         photo
         phone
         aboutMe
         school
         job
         gender
         instagramUrl
         twitterUrl
         githubUrl
         createdAt
      }
   }
`;
