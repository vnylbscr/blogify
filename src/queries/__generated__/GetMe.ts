/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMe
// ====================================================

export interface GetMe_getMeWithToken_posts_comments_author {
  __typename: "Author";
  userID: string;
  name: string | null;
}

export interface GetMe_getMeWithToken_posts_comments {
  __typename: "Comment";
  id: string;
  author: GetMe_getMeWithToken_posts_comments_author;
  comment: string;
  likeCount: (number | null)[] | null;
  createdAt: string;
}

export interface GetMe_getMeWithToken_posts {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  subtitle: string | null;
  media: (string | null)[] | null;
  comments: GetMe_getMeWithToken_posts_comments[] | null;
}

export interface GetMe_getMeWithToken {
  __typename: "User";
  id: string;
  name: string | null;
  email: string | null;
  type: number | null;
  createdAt: string | null;
  posts: (GetMe_getMeWithToken_posts | null)[] | null;
}

export interface GetMe {
  getMeWithToken: GetMe_getMeWithToken;
}

export interface GetMeVariables {
  getMeWithTokenToken: string;
}
