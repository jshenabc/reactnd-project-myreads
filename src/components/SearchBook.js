import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const SearchBook = ( {query, updateQuery} ) => {

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input value={query} onChange={event => updateQuery(event.target.value)} type="text" placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}

export default SearchBook
