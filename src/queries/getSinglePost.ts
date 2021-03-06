import { gql, useQuery } from '@apollo/client';
import * as GetSinglePostQueryTypes from './__generated__/getSinglePostQuery';

export const COMMENT_CORE_FIELDS = gql`
   fragment CommentCoreFields on Comment {
      _id
      content
      createdAt
      __typename
   }
`;

export const GET_SINGLE_POST = gql`
   ${COMMENT_CORE_FIELDS}
   query getSinglePostQuery($_id: ID!) {
      getPost(_id: $_id) {
         _id
         title
         subtitle
         content
         image
         comments {
            ...CommentCoreFields
         }
         category
         createdAt
         user {
            _id
            username
            email
         }
         slug

         commentCount
         likedUsers {
            _id
            username
            email
            aboutMe
            job
            location {
               country
               city
            }
         }
      }
   }
`;

export const useGetSinglePostQuery = (variables: GetSinglePostQueryTypes.getSinglePostQueryVariables) => {
   const data = useQuery<
      GetSinglePostQueryTypes.getSinglePostQuery,
      GetSinglePostQueryTypes.getSinglePostQueryVariables
   >(GET_SINGLE_POST, {
      variables,
   });

   return data;
};
