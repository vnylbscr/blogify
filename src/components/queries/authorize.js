import { gql } from "@apollo/client";

export const DENEME = gql`
  query getDatas {
    books {
      id
    }
  }
`;
