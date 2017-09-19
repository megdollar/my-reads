import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import SearchPage from './components/SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
      books: []
  }
    
    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    componentDidMount = () => {
      this.getAllBooks()
      }
      
    handleChange = (book, shelfName) => {
        BooksAPI.update(book, shelfName)
        this.getAllBooks()
        }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList
            books={this.state.books}
            onHandleChange={ this.handleChange }
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchPage
          />
        )}/>
         
      </div>
    )
  }
}

export default BooksApp
