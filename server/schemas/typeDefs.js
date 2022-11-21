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
    _id: ID
    relation: String
    details: String
  }
  type Parents {
    _id: ID
    relation: String
    details: String
  }
  type Siblings {
    _id: ID
    name: String
    relation: String
    details: String
  }
  type DiaryEntry {
    _id: ID
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
  addGrand(userId:ID!,relation:String,details:String):User
  addParent(userId:ID!,relation:String!,details:String):User
  addSib(userId:ID!,name:String!,relation:String!,details:String):User
  addDiaryEntry(userId:ID!,title:String!, description:String):User
}
`;

module.exports = typeDefs;
