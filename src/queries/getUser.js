import { gql } from '@apollo/client';

export const GET_ME_WITH_TOKEN = gql`
   query getMe($getMeWithTokenToken: String!) {
      getMeWithToken(token: $getMeWithTokenToken) {
         id
         name
         email
         type
         createdAt
         posts {
            id
            title
            content
            subtitle
            media
            comments {
               id
               author {
                  userID
                  name
               }
               comment
               likeCount
               createdAt
            }
         }
      }
   }
`;
