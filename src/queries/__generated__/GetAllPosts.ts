/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPosts
// ====================================================

export interface GetAllPosts_getAllPosts_author {
  __typename: "Author";
  userID: string;
  name: string | null;
}

export interface GetAllPosts_getAllPosts_comments_author {
  __typename: "Author";
  name: string | null;
}

export interface GetAllPosts_getAllPosts_comments {
  __typename: "Comment";
  id: string;
  author: GetAllPosts_getAllPosts_comments_author;
  comment: string;
  likeCount: (number | null)[] | null;
  createdAt: string;
}

export interface GetAllPosts_getAllPosts {
  __typename: "Post";
  id: string;
  title: string;
  subtitle: string | null;
  content: string;
  media: (string | null)[] | null;
  author: GetAllPosts_getAllPosts_author;
  comments: GetAllPosts_getAllPosts_comments[] | null;
  category: (string | null)[];
  createdAt: string | null;
}

export interface GetAllPosts {
  getAllPosts: GetAllPosts_getAllPosts[] | null;
}
