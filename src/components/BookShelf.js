import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    const { books } = this.props

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
      { typeof(books) === 'undefined' || books.error === 'empty query' ? <p>No result</p> : books.map(book => {
        return <li key={book.id} >
                <Book book={book}  shelf={book.shelf} updateBook={this.props.updateBook}/>
              </li>
      })}
        </ol>
      </div>
    )
  }
}

export default BookShelf
