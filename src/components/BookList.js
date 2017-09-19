import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf.js'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onHandleChange: PropTypes.func.isRequired
    }
    
    render(){
        const { books, onHandleChange } = this.props
        console.log(this.props)
        
        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1> </div>
            <div className="list-books-content">
                <BookShelf
                    books={this.props.books.filter(book=>book.shelf==='currentlyReading')}
                    shelfName="Currently Reading"
                    onHandleChange={onHandleChange}

                />
                <BookShelf
                    books={this.props.books.filter(book=>book.shelf==='wantToRead')}
                    shelfName="Want to Read"
                    onHandleChange={onHandleChange}

                />
                <BookShelf
                    books={this.props.books.filter(book=>book.shelf==='read')}
                    shelfName="Read"
                    onHandleChange={onHandleChange}

                />
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
        )
    }
}

export default BookList