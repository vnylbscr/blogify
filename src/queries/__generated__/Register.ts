/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  __typename: "User";
  id: string;
  name: string | null;
  token: string | null;
  createdAt: string | null;
  email: string | null;
}

export interface Register {
  register: Register_register;
}

export interface RegisterVariables {
  username: string;
  email: string;
  password: string;
}
