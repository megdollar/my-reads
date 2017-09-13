import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    
    render(){
        const { books } = this.props
        console.log(books)
        
        const currentlyReading=this.props.books.filter((book=>book.shelf==='currentlyReading'))
        const wantToRead=this.props.books.filter((book=>book.shelf==='wantToRead'))     
        const readBooks=this.props.books.filter((book=>book.shelf==='read'))

        return (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1> </div>
        <div className="list-books-content">
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                         {currentlyReading.map((book)=>(
                            <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select>
                                        <option value="" disabled>Move to...</option>
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
                        </li>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                         {wantToRead.map((book)=>(
                            <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select>
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
                        </li>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                         {readBooks.map((book)=>(
                            <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select>
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
                        </li>
                        ))}
                    </ol>
                </div>
            </div>


    </div>
</div>

        )
    }
}

export default BookList