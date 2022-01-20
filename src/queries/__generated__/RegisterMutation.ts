/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register_posts_comments {
  __typename: "Comment";
  _id: string | null;
  content: string | null;
  createdAt: any | null;
}

export interface RegisterMutation_register_posts {
  __typename: "Post";
  _id: string;
  content: string | null;
  title: string;
  image: string | null;
  subtitle: string | null;
  comments: (RegisterMutation_register_posts_comments | null)[] | null;
  category: (string | null)[] | null;
  createdAt: any | null;
  slug: string | null;
}

export interface RegisterMutation_register {
  __typename: "User";
  _id: string;
  username: string | null;
  email: string | null;
  posts: (RegisterMutation_register_posts | null)[] | null;
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

export interface RegisterMutation {
  register: RegisterMutation_register;
}

export interface RegisterMutationVariables {
  username: string;
  email: string;
  password: string;
}
