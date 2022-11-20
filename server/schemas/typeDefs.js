const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    family:[Family]
    diary: [Diary]
  }

  type Family {
    _id: ID
    name:String
    grandparents:[Grandparents]
    parents:[Parents]
    siblings:[Siblings]
  }

  type Diary {
    _id:ID
    owner:String
    diaryEntry:[DiaryEntry]
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
  }

  type Query {
    users: [User]
    user(id: ID!): User
    diary:[Diary],
    family:[Family]
  }

  # Define which mutations the client is allowed to make
type Mutation{
  addFamily(userId:ID!,name:String!):User
  addGrand(userId:ID!,relation:String!,details:String):Family
  addParent(relation:String!,details:String):Family
  addSib(relation:String!,details:String):Family
  addDiary(owner:String!):User
  addDiaryEntry(title:String!, description:String):Diary
}
`;

module.exports = typeDefs;
