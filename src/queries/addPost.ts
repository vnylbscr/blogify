import { gql } from '@apollo/client';

export const ADD_POST_MUTATION = gql`
   input PostInput {
      userId: ID!
      title: String!
      content: String!
      cetegory: [String]
   }
   mutation AddPostMutation($addPostInput: PostInput) {
      addPost ($input) {
         _id
         title
         content
         author {
            userID
            name
         }
         comments {
            id
            author {
               userID
               name
            }
            likeCount
            comment
            createdAt
         }
         category
         createdAt
      }
   }
`;
