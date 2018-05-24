import React from 'react';
import './App.css';
import Landing from './components/Landing.js';
import SearchBook from './components/SearchBook.js';
import * as BookAPI from './utils/BooksAPI.js';
import {Route} from 'react-router-dom';
import BookShelf from './components/BookShelf.js';

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    bookResult: []
  }

  /**
  * @description fetching books from remote server, once get response we update our local state
  * @constructor
  * @param {obj} books - The book needs to be updated
  */
 componentDidMount() {
   BookAPI.getAll().then((books) => {
     this.setState(() => ({books}))
   })
 }

 /**
 * @description pass the books to update API and local state thus move book to a new shelf
 * @constructor
 * @param {obj} book - The book needs to be updated
 * @param {string} shelf - target shelf
 */
updateBook = (book,shelf) => {
 book.shelf = shelf
 BookAPI.update(book,shelf).then((obj) => {
   this.setState((currentState) => ({
     // Filter the old book out of Books and then concatenate the new book
     books: currentState.books.filter(mybook => mybook.id !== book.id).concat([book])
   }))
 })
}

/**
* @description Query by Search API and update local state bookResult
* @constructor
* @param {string} query - The query in the search
*/
 updateQuery = (query) => {
   this.setState(
     () => ({query:query.trim()})
   )
   BookAPI.search(query).then((bookResult) => {
     this.setState(() => ({bookResult}))
   }).catch((error) => {
    // handle error
     console.log("error",error)
   })
 }


  render() {
    return (
      <div className="app">
        {/* Search page */}
        <Route exact path='/search' render={() => (
          <div>
            <SearchBook query={this.state.query} updateQuery={this.updateQuery}/>
            <BookShelf books={this.state.bookResult} shelfedBooks={this.state.books} updateBook={this.updateBook}/>
          </div>
        )}/>
        {/* Main landing page */}
        <Route exact path='/' render={() => ( <Landing books={this.state.books} updateBook={this.updateBook}/>)}/>
      </div>
    )
  }
}

export default BooksApp
