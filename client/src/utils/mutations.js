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
mutation AddDiaryEntry($title: String!, $description:String) {
    addDiaryEntry(title: $title, description:$description) {
      username
      diaryEntry {
        diaryEntryId
        title
        description
        createdAt
      }
    }
  }`;

export const ADD_GRANDPARENT = gql`
mutation AddGrand($relation: String, $details: String) {
    addGrand(relation: $relation, details: $details) {
      _id
      username
      grandparents {
        grandparentId
        relation
        details
      }
    }
  }
`;

export const ADD_PARENT = gql`
mutation AddParent( $relation: String!) {
    addParent(relation: $relation) {
      username
      parents {
        parentId
        relation
        details
      }
    }
  }`;

export const ADD_SIBLING = gql`
  mutation AddSib($relation: String!, $name: String!) {
    addSib(relation: $relation, name: $name) {
      username
      siblings {
        siblingId
        name
        relation
        details
      }
    }
  }
  `;