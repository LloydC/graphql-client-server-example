const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    fantasy: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

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
// definition and your set of resolvers.
  const resolvers = {
    Query: {
      books: () => books,
    },
  };

// The ApolloServer constructor requires two parameters: your schema
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});