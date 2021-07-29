/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPosts
// ====================================================

export interface getPosts_getAllPosts_author {
  __typename: "Author";
  userID: string;
  name: string | null;
}

export interface getPosts_getAllPosts_comments_author {
  __typename: "Author";
  userID: string;
  name: string | null;
}

export interface getPosts_getAllPosts_comments {
  __typename: "Comment";
  likeCount: (number | null)[] | null;
  comment: string;
  author: getPosts_getAllPosts_comments_author;
}

export interface getPosts_getAllPosts {
  __typename: "Post";
  id: string;
  subtitle: string | null;
  title: string;
  content: string;
  media: (string | null)[] | null;
  author: getPosts_getAllPosts_author;
  comments: getPosts_getAllPosts_comments[] | null;
}

export interface getPosts {
  getAllPosts: getPosts_getAllPosts[] | null;
}
