import { gql } from '@apollo/client';

export const GET_COMMENTS_OF_POST_QUERY = gql`
   query getCommentOfPostQuery($getCommentsPostId: ID!) {
      getComments(postId: $getCommentsPostId) {
         _id
         content

         createdAt
      }
   }
`;
