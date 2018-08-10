import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'

class Book extends React.Component {
  checkThumbnail = () => {
    const {imageLinks} = this.props.book
    const imageURL = imageLinks ? imageLinks.thumbnail : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"
    return <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})`}}></div>
  }
  render() {
    const {book, shelfedBooks} = this.props
    let shelf = book.shelf
    shelfedBooks && shelfedBooks.forEach(shelfedBook => {
      if (shelfedBook.id === book.id) shelf = shelfedBook.shelf
    })

    return (
        <div className="book">
          <div className="book-top">
            {this.checkThumbnail()}
            <div className="book-shelf-changer">
              <select value={shelf ? shelf : "none"} onChange={event => this.props.updateBook(book,event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
          <a
            href={book.previewLink}
            target="_blank">
            Read More
          </a>
        </div>
    )
  }
}

export default Book
