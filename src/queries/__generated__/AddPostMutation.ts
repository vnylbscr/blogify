/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPostMutation
// ====================================================

export interface AddPostMutation_addPost_comments {
  __typename: "Comment";
  _id: string | null;
  content: string | null;
  createdAt: any | null;
}

export interface AddPostMutation_addPost {
  __typename: "Post";
  _id: string;
  title: string;
  subtitle: string | null;
  content: string | null;
  image: string | null;
  comments: (AddPostMutation_addPost_comments | null)[] | null;
  category: (string | null)[] | null;
  createdAt: any | null;
  slug: string | null;
}

export interface AddPostMutation {
  addPost: AddPostMutation_addPost;
}

export interface AddPostMutationVariables {
  userId: string;
  title: string;
  content: string;
  category?: (string | null)[] | null;
  subtitle: string;
  image: any;
}
