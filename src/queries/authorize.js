import { gql } from "@apollo/client";

export const USER_REGISTER_MUTATION = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      id
      name
      token
      createdAt
      email
    }
  }
`;

export const USER_LOGIN_MUTATION = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      id
      name
      token
      createdAt
      email
    }
  }
`;
