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
  createdAt: any | null;
}

export interface LoginMutation_login_posts {
  __typename: "Post";
  _id: string;
  content: string | null;
  title: string;
  image: string | null;
  subtitle: string | null;
  comments: (LoginMutation_login_posts_comments | null)[] | null;
  category: (string | null)[] | null;
  createdAt: any | null;
  slug: string | null;
}

export interface LoginMutation_login {
  __typename: "User";
  _id: string;
  username: string | null;
  email: string | null;
  posts: (LoginMutation_login_posts | null)[] | null;
  token: string | null;
  postCount: number | null;
  photo: string | null;
  phone: string | null;
  aboutMe: string | null;
  school: string | null;
  job: string | null;
  gender: string | null;
  instagramUrl: string | null;
  twitterUrl: string | null;
  githubUrl: string | null;
  createdAt: any | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}
