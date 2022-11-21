import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
query Users {
    users {
      _id
      email
      username
      grandparents {
        relation
        details
      }
      parents {
        relation
        details
      }
      siblings {
        name
        relation
        details
      }
      diaryEntry {
        title
        description
        createdAt
      }
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

export const QUERY_ME = gql`
query me {
    me {
      _id
      name
      skills
    }
  }
`;