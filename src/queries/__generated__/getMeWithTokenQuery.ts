/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMeWithTokenQuery
// ====================================================

export interface getMeWithTokenQuery_getMeWithToken_posts_comments {
  __typename: "Comment";
  content: string | null;
  _id: string | null;
  createdAt: any | null;
}

export interface getMeWithTokenQuery_getMeWithToken_posts {
  __typename: "Post";
  slug: string | null;
  createdAt: any | null;
  category: (string | null)[] | null;
  comments: (getMeWithTokenQuery_getMeWithToken_posts_comments | null)[] | null;
  content: string | null;
  subtitle: string | null;
  title: string;
  _id: string;
}

export interface getMeWithTokenQuery_getMeWithToken {
  __typename: "User";
  _id: string;
  username: string | null;
  email: string | null;
  posts: (getMeWithTokenQuery_getMeWithToken_posts | null)[] | null;
  token: string | null;
  postCount: number | null;
  photo: string | null;
  phone: string | null;
  aboutMe: string | null;
  job: string | null;
  school: string | null;
  gender: string | null;
  instagramUrl: string | null;
  twitterUrl: string | null;
  githubUrl: string | null;
  createdAt: any | null;
}

export interface getMeWithTokenQuery {
  getMeWithToken: getMeWithTokenQuery_getMeWithToken;
}

export interface getMeWithTokenQueryVariables {
  getMeWithTokenToken: string;
}
