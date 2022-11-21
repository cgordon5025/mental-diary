import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
      
    }
  }
`;

export const ADD_ENTRY = gql`
mutation AddDiaryEntry($userId: ID!, $title: String!) {
    addDiaryEntry(userId: $userId, title: $title) {
      username
      diaryEntry {
        title
        description
        createdAt
      }
    }
  }`;

export const ADD_GRANDPARENT = gql`
mutation AddGrand($userId: ID!, $relation: String, $details: String) {
    addGrand(userId: $userId, relation: $relation, details: $details) {
      _id
      username
      grandparents {
        relation
        details
      }
    }
  }
`;

export const ADD_PARENT = gql`
mutation AddParent($userId: ID!, $relation: String!) {
    addParent(userId: $userId, relation: $relation) {
      username
      parents {
        relation
        details
      }
    }
  }`;

export const ADD_SIBLING = gql`
  mutation AddSib($userId: ID!, $relation: String!, $name: String!) {
    addSib(userId: $userId, relation: $relation, name: $name) {
      username
      siblings {
        name
        relation
        details
      }
    }
  }
  `;