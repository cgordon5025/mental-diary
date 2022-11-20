import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
query Users {
    users {
      _id
      email
      username
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
query user($userId: ID!) {
    user(id: $userId) {
      _id
      email
      username
    }
  }
`;