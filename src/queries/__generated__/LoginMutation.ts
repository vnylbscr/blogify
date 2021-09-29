/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_posts_comments {
  __typename: "Comment";
  _id: string | null;
  content: string | null;
  likedCount: number | null;
  createdAt: string | null;
}

export interface LoginMutation_login_posts {
  __typename: "Post";
  _id: string;
  title: string;
  content: string | null;
  comments: (LoginMutation_login_posts_comments | null)[] | null;
  category: (string | null)[] | null;
  createdAt: string | null;
  slug: string | null;
}

export interface LoginMutation_login {
  __typename: "User";
  _id: string;
  username: string | null;
  email: string | null;
  posts: (LoginMutation_login_posts | null)[] | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}
