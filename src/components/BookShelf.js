import React, { Component } from 'react'

class BookShelf extends Component {
    render(){
        const { books } = this.props
            
    return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                         {books.map((book)=>(
                            <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select value={book.shelf} 
                                        onChange={(event) =>this.updateShelf(event.target.value)}>
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

export default BookShelf