const { gpl } = require("apollo-server-express");

const typeDefs = gpl`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String
    authors: String
    description: String
    image: String
    link: String
    title: String
  }

  input saveBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    saveBook(input: saveBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
