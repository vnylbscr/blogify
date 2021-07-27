import { gql } from "@apollo/client";

export const GET_ALL_POSTS_QUERY = gql`
  query {
    getAllPosts {
      id
      subtitle
      title
      content
      media
      author {
        userID
        name
      }
      comments {
        likeCount
        comment
        author {
          userID
          name
        }
      }
    }
  }
`;
