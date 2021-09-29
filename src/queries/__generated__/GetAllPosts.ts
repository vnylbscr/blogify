/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPosts
// ====================================================

export interface GetAllPosts_getAllPosts_comments {
  __typename: "Comment";
  _id: string | null;
  content: string | null;
  likedCount: number | null;
  createdAt: string | null;
}

export interface GetAllPosts_getAllPosts {
  __typename: "Post";
  _id: string;
  title: string;
  content: string | null;
  comments: (GetAllPosts_getAllPosts_comments | null)[] | null;
  category: (string | null)[] | null;
  createdAt: string | null;
  slug: string | null;
}

export interface GetAllPosts {
  getAllPosts: GetAllPosts_getAllPosts[] | null;
}
