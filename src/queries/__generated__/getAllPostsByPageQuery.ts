/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPostsByPageQuery
// ====================================================

export interface getAllPostsByPageQuery_getAllPostsByPage_docs_user {
  __typename: "User";
  username: string | null;
  _id: string;
  photo: string | null;
}

export interface getAllPostsByPageQuery_getAllPostsByPage_docs {
  __typename: "Post";
  _id: string;
  title: string;
  subtitle: string | null;
  content: string | null;
  image: string | null;
  user: getAllPostsByPageQuery_getAllPostsByPage_docs_user | null;
  createdAt: any | null;
}

export interface getAllPostsByPageQuery_getAllPostsByPage {
  __typename: "PostPaginator";
  totalDocs: number | null;
  limit: number | null;
  page: number | null;
  totalPages: number | null;
  hasNextPage: boolean | null;
  nextPage: number | null;
  hasPrevPage: boolean | null;
  prevPage: number | null;
  pagingCounter: number | null;
  docs: (getAllPostsByPageQuery_getAllPostsByPage_docs | null)[] | null;
}

export interface getAllPostsByPageQuery {
  getAllPostsByPage: getAllPostsByPageQuery_getAllPostsByPage;
}

export interface getAllPostsByPageQueryVariables {
  page?: number | null;
  limit?: number | null;
}
