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
  createdAt: any | null;
}

export interface GetAllPosts_getAllPosts_user {
  __typename: "User";
  username: string | null;
  _id: string;
  photo: string | null;
}

export interface GetAllPosts_getAllPosts {
  __typename: "Post";
  _id: string;
  title: string;
  content: string | null;
  image: string | null;
  subtitle: string | null;
  comments: (GetAllPosts_getAllPosts_comments | null)[] | null;
  user: GetAllPosts_getAllPosts_user | null;
  category: (string | null)[] | null;
  createdAt: any | null;
  slug: string | null;
}

export interface GetAllPosts {
  getAllPosts: (GetAllPosts_getAllPosts | null)[] | null;
}
