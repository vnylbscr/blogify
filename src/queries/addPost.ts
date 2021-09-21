import { gql } from '@apollo/client';

export const ADD_POST_MUTATION = gql`
   input PostInput {
      ownerId: ID!
      title: String!
      subtitle: String
      content: String!
      media: String!
      cetegory: [String]
      createdAt: String!
   }
   mutation AddPostMutation($addPostInput: PostInput) {
      addPost(input: $addPostInput) {
         id
         title
         subtitle
         content
         createdAt
         author {
            name
            userID
         }
      }
   }
`;
