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
  likedCount: number | null;
  createdAt: string | null;
}

export interface RegisterMutation_register_posts {
  __typename: "Post";
  _id: string;
  title: string;
  content: string | null;
  comments: (RegisterMutation_register_posts_comments | null)[] | null;
  category: (string | null)[] | null;
  createdAt: string | null;
  slug: string | null;
}

export interface RegisterMutation_register {
  __typename: "User";
  _id: string;
  username: string | null;
  email: string | null;
  posts: (RegisterMutation_register_posts | null)[] | null;
}

export interface RegisterMutation {
  register: RegisterMutation_register;
}

export interface RegisterMutationVariables {
  username: string;
  email: string;
  password: string;
}
