/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPostMutation
// ====================================================

export interface AddPostMutation_addPost {
  __typename: "Post";
  _id: string;
  title: string;
  content: string | null;
  category: (string | null)[] | null;
  createdAt: string | null;
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
  image: any;
}
