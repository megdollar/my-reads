import React from 'react'
import { Link } from 'react-router-dom'

 function NoMatch (props) {           
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>Page Not Found</h1> </div>
            <div className="back-arrow">
                <Link to="/">Home</Link>
            </div>
        </div>

        )
}


export default NoMatch