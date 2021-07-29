/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Query
// ====================================================

export interface Query_getAllPosts_author {
  __typename: "Author";
  userID: string;
  name: string | null;
}

export interface Query_getAllPosts_comments_author {
  __typename: "Author";
  name: string | null;
}

export interface Query_getAllPosts_comments {
  __typename: "Comment";
  id: string;
  author: Query_getAllPosts_comments_author;
  comment: string;
  likeCount: (number | null)[] | null;
  createdAt: string;
}

export interface Query_getAllPosts {
  __typename: "Post";
  id: string;
  title: string;
  subtitle: string | null;
  content: string;
  media: (string | null)[] | null;
  author: Query_getAllPosts_author;
  comments: Query_getAllPosts_comments[] | null;
  category: (string | null)[];
  createdAt: string | null;
}

export interface Query {
  getAllPosts: Query_getAllPosts[] | null;
}
