import React from 'react'
import gql from 'graphql-tag'
import { Query} from 'react-apollo'

const booksQuery = gql `
{
  books {
    title
    author
  }
}
`
export default function Books(){
    return(
        <Query query={booksQuery}>
      {({data, loading, error})=>{
        if(loading) return <p> Loading ... </p>
        if(error) return <p> Something went wrong </p>
        return (
          <ul>
            {data.books.map(({title,author}) => 
              <li key={author}>{title}</li>
            )}
          </ul>
        )
      }}
      </Query>
    )
}