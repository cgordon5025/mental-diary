const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    grandparents:[Grandparents]
    parents:[Parents]
    siblings:[Siblings]
    diaryEntry:[DiaryEntry]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Grandparents {
    grandparentId: ID
    relation: String
    details: String
  }
  type Parents {
    parentId: ID
    relation: String
    details: String
  }
  type Siblings {
    siblingId: ID
    name: String
    relation: String
    details: String
  }
  type DiaryEntry {
    diaryEntryId: ID
    title: String
    description: String
    createdAt:String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  # Define which mutations the client is allowed to make
type Mutation{
  addUser(username: String!, email: String!, password: String!): Auth
  login(username:String!, password: String!): Auth
  addGrand(relation:String,details:String):User
  addParent(relation:String!,details:String):User
  addSib(,name:String!,relation:String!,details:String):User
  addDiaryEntry(title:String!, description:String):User
}
`;

module.exports = typeDefs;
