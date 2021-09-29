/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCommentOfPostQuery
// ====================================================

export interface getCommentOfPostQuery_getComments {
  __typename: "Comment";
  _id: string | null;
  content: string | null;
  likedCount: number | null;
  createdAt: string | null;
}

export interface getCommentOfPostQuery {
  getComments: (getCommentOfPostQuery_getComments | null)[] | null;
}

export interface getCommentOfPostQueryVariables {
  getCommentsPostId: string;
}
