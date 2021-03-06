import { gql, useQuery } from '@apollo/client';
import { CORE_USER_FIELDS } from './fragments';
import * as GetAllPostQueryTypes from './__generated__/getAllPostsByPageQuery';

export const GET_ALL_POSTS_WITH_PAGINATE_QUERY = gql`
   ${CORE_USER_FIELDS}
   query getAllPostsByPageQuery($page: Int, $limit: Int) {
      getAllPostsByPage(page: $page, limit: $limit) {
         totalDocs
         limit
         page
         totalPages
         hasNextPage
         nextPage
         hasPrevPage
         prevPage
         pagingCounter
         docs {
            _id
            title
            subtitle
            content
            image
            user {
               ...CoreUserFields
            }
            createdAt
         }
      }
   }
`;

export const useGetAllPostWithPaginateQuery = (variables: GetAllPostQueryTypes.getAllPostsByPageQueryVariables) => {
   const data = useQuery<
      GetAllPostQueryTypes.getAllPostsByPageQuery,
      GetAllPostQueryTypes.getAllPostsByPageQueryVariables
   >(GET_ALL_POSTS_WITH_PAGINATE_QUERY, { variables });

   return data;
};
