import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const booksQuery = gql `
{
  books(fantasy: true) {
    title
    author
    fantasy
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
                {data.books.map(({title, author, fantasy}) => 
                  <li key={author}>{title} {fantasy ? ", Fantasy book": ""}</li>
                )}
              </ul>
            )
          }}
        </Query>
    )
}