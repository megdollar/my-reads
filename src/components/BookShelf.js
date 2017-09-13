import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes={
        books:PropTypes.array.isRequired,
    }
    render(){
      const currentlyReading=this.props.books.filter((book=>book.shelf==='currentlyReading')).map((book)=>{
      return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
            <div className="book-authors">{book.authors.map((author)=>{
                return(
                  <span key={author} className="author-name"> {author}</span>
                )
            })}</div>
          </div>
        </li>
      )
    })
    const wantToRead=this.props.books.filter((book=>book.shelf==='wantToRead')).map((book)=>{
      return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
            <div className="book-authors">{book.authors.map((author)=>{
                return(
                  <span key={author} className="author-name"> {author}</span>
                )
            })}</div>
          </div>
        </li>
      )
    })
    const readBooks=this.props.books.filter((book=>book.shelf==='read')).map((book)=>{
      return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
            <div className="book-authors">{book.authors.map((author)=>{
                return(
                  <span key={author} className="author-name"> {author}</span>
                )
            })}</div>
          </div>
        </li>
      )
    })
    }
}

export default BookShelf
