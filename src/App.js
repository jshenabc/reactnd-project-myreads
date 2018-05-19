import React from 'react';
import './App.css';
import Landing from './components/Landing.js';
import SearchBook from './components/SearchBook.js';
import * as BookAPI from './utils/BooksAPI.js';
import {Route} from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }


 //2. fetching books from remote server
 //3. once get response we update our local state
 componentDidMount() {
   BookAPI.getAll().then((books) => {
     this.setState(() => ({books}))
   })
 }

 //pass the books to update API
 //update local state and move book to a new shelf
updateBook = (book,shelf) => {
 book.shelf = shelf;
 BookAPI.update(book,shelf).then((book) => {
   this.setState((currentState) => ({
     // Filter the old book out of Books and then concatenate the new book
     books: currentState.books.filter(mybook => mybook.id !== book.id).concat([book])
   }))
 })
}

  render() {
    return (
      <div className="app">

        <Route path='/search' render={() => (
          <SearchBook/>
        )}/>
        <Route exact path='/' render={() => ( <Landing books={this.state.books} updateBook={this.updateBook}/>)}/>
      </div>
    )
  }
}

export default BooksApp
