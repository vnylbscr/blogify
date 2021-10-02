import { gql } from '@apollo/client';

export const USER_REGISTER_MUTATION = gql`
   mutation RegisterMutation($username: String!, $email: String!, $password: String!) {
      register(input: { username: $username, email: $email, password: $password }) {
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
               likedCount
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
