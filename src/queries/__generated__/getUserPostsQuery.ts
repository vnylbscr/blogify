/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserPostsQuery
// ====================================================

export interface getUserPostsQuery_getUserPosts_comments {
  __typename: "Comment";
  _id: string | null;
  content: string | null;
  likedCount: number | null;
  createdAt: string | null;
}

export interface getUserPostsQuery_getUserPosts {
  __typename: "Post";
  _id: string;
  title: string;
  content: string | null;
  image: string | null;
  subtitle: string | null;
  comments: (getUserPostsQuery_getUserPosts_comments | null)[] | null;
  category: (string | null)[] | null;
  createdAt: string | null;
  slug: string | null;
}

export interface getUserPostsQuery {
  getUserPosts: (getUserPostsQuery_getUserPosts | null)[] | null;
}

export interface getUserPostsQueryVariables {
  getUserPostsUser: string;
}
