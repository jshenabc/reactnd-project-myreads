import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'

class Book extends React.Component {
  checkThumbnail = () => {
    const {imageLinks} = this.props.book
    const imageURL = imageLinks ? imageLinks.thumbnail : "https://www.sarvgyan.com/hc/wp-content/uploads/2014/03/image-unavailable.jpg"
    return <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})`}}></div>
  }
  render() {
    const	{book} = this.props
    
    return (
        <div className="book">
          <div className="book-top">
            {this.checkThumbnail()}
            <div className="book-shelf-changer">
              <select value={book.shelf ? book.shelf : "none"} onChange={event => this.props.updateBook(book,event.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
    )
  }
}

export default Book
