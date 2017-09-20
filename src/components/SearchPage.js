import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf.js'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'



class SearchPage extends Component {
        static propTypes = {
        onHandleChange: PropTypes.func.isRequired
    }
    
    state = {
        query: '',
        results: []
    }
    updateQuery = (query) => {
        this.setState({
            query: query
        })
        if (query){
            BooksAPI.search(query, 20).then((results) =>
                 this.setState({
                    results:results
                })                          
         )}
            
    }
    
    render(){
        const { onHandleChange } = this.props
        const { query, results } = this.state
        return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
                  <ol className="books-grid">
                      {results.map((book)=>(
                            <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select value={book.shelf} 
                                        onChange={(e) => onHandleChange(book,e.target.value)}>
                                        <option value="" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors.map((author)=>{
                                return(
                                <div key={author} className="author">{author}</div>
                                        )
                            })}</div>
                        </div>
                        </li>
                        ))}             
                      
                      </ol>
            </div>
        </div>
        )
    }
}

export default SearchPage