const { ApolloServer, gql } = require('apollo-server');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    fantasy: true
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    fantasy: true
  },
  {
    title: 'Rich Dad, Poor Dad',
    author: 'Jack Doe',
    fantasy: false
  },
  {
    title: 'The Ruins of the Empire',
    author: 'Akala',
    fantasy: false
  },
];

const users = [
  {
    id: '1',
    name: 'Elizabeth Bennet'
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy'
  }
];

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    fantasy: Boolean
  }
type User {
  id: Int
  name: String
}
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(fantasy: Boolean): [Book]
    users: [User]
  }
`;

// definition and your set of resolvers.
  const resolvers = {
    Query: {
      books: (parent, args, context, info) => {
         if(args.fantasy){ 
           const fantasyBooks = books.filter(book => book.fantasy === args.fantasy) 
           return fantasyBooks}
        return books},
      users: () => {return users}
    }
    
  };

// The ApolloServer constructor requires two parameters: your schema
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});