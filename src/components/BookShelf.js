import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import Book from './Book'

const BookShelf = ({ books, shelfedBooks, updateBook }) => {

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
    { typeof(books) === 'undefined' || books.error === 'empty query' ? <p>No result</p> : books.map(book => {
      return <li key={book.id} >
              <Book book={book}  shelf={book.shelf} shelfedBooks={shelfedBooks} updateBook={updateBook}/>
            </li>
    })}
      </ol>
    </div>
  )
}

export default BookShelf
