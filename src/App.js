import React from 'react';
import './App.css';
import Landing from './components/Landing.js';
import SearchBook from './components/SearchBook.js';
import * as BookAPI from './utils/BooksAPI.js';
import {Route} from 'react-router-dom';
import BookShelf from './components/BookShelf.js';

class BooksApp extends React.Component {
  state = {
    /**
     * books state is to display books on landing screen
     * query is to store queries we did on the search page
     * bookResult is to display books through query search result
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    query: '',
    bookResult: [],
    error: ''
  }


 // fetching books from remote server
 // once get response we update our local state
 componentDidMount() {
   BookAPI.getAll().then((books) => {
     this.setState(() => ({books}))
   })
 }

 //pass the books to update API
 //update local state and move book to a new shelf
updateBook = (book,shelf) => {
 book.shelf = shelf
 BookAPI.update(book,shelf).then((obj) => {
   this.setState((currentState) => ({
     // Filter the old book out of Books and then concatenate the new book
     books: currentState.books.filter(mybook => mybook.id !== book.id).concat([book])
   }))
 })
}

 //update local state query
 updateQuery = (query) => {
   this.setState(
     () => ({query:query.trim()})
   )
   BookAPI.search(query).then((bookResult) => {
     this.setState(() => ({bookResult}))
   }).catch((error) => {
    // handle error
     this.setState(() => ({error}))
   })
 }

//show book search result based on clearQuery

  render() {
    return (
      <div className="app">
        {/* Search page */}
        <Route exact path='/search' render={() => (
          <div>
            <SearchBook query={this.state.query} updateQuery={this.updateQuery}/>
            <BookShelf  books={this.state.bookResult} updateBook={this.updateBook}/>
          </div>
        )}/>
        {/* Main landing page */}
        <Route exact path='/' render={() => ( <Landing books={this.state.books} updateBook={this.updateBook}/>)}/>
      </div>
    )
  }
}

export default BooksApp
