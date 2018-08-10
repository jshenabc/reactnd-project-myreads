import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import BookShelf from './BookShelf.js'
import { Link } from 'react-router-dom'

const Landing = ({ books, updateBook }) => {

    /**
     * create three variables to store diffferent categories of books
     * pass them into our components
     * filter the book to match with the shelf
     */
    const currentlyReadingShelf = books.filter(book => {return book.shelf === "currentlyReading"});
    const wantToReadShelf = books.filter(book => {return book.shelf === "wantToRead"});
    const readShelf = books.filter(book => {return book.shelf === "read"});

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookShelf books={currentlyReadingShelf} updateBook={updateBook} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BookShelf books={wantToReadShelf} updateBook={updateBook} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookShelf books={readShelf} updateBook={updateBook} />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    )
}

export default Landing
