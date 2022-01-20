/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSinglePostQuery
// ====================================================

export interface getSinglePostQuery_getPost_comments {
  __typename: "Comment";
  _id: string | null;
  content: string | null;
  createdAt: any | null;
}

export interface getSinglePostQuery_getPost_user {
  __typename: "User";
  _id: string;
  username: string | null;
  email: string | null;
}

export interface getSinglePostQuery_getPost_likedUsers_location {
  __typename: "Location";
  country: string | null;
  city: string | null;
}

export interface getSinglePostQuery_getPost_likedUsers {
  __typename: "User";
  _id: string;
  username: string | null;
  email: string | null;
  aboutMe: string | null;
  job: string | null;
  location: getSinglePostQuery_getPost_likedUsers_location | null;
}

export interface getSinglePostQuery_getPost {
  __typename: "Post";
  _id: string;
  title: string;
  subtitle: string | null;
  content: string | null;
  image: string | null;
  comments: (getSinglePostQuery_getPost_comments | null)[] | null;
  category: (string | null)[] | null;
  createdAt: any | null;
  user: getSinglePostQuery_getPost_user | null;
  slug: string | null;
  commentCount: number | null;
  likedUsers: (getSinglePostQuery_getPost_likedUsers | null)[] | null;
}

export interface getSinglePostQuery {
  getPost: getSinglePostQuery_getPost;
}

export interface getSinglePostQueryVariables {
  _id: string;
}
