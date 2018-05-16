import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import Book from './Book'

class BookShelf extends React.Component {

  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
      {this.props.books.map(book => {
        return <li>
                <Book book={book}/>
              </li>
      })}
        </ol>
      </div>
    )
  }
}

export default BookShelf
