import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'
import './App.css'

class MyReads extends Component {
  
  	render() {
      	// filter books by Shelf Currently Reading, Want to Read, Read
      	let books = this.props.books;
      	let currBooks = books.filter(book => { return book.shelf === 'currentlyReading'; } );
      	let wantBooks = books.filter(book => { return book.shelf === 'wantToRead'; } );
      	let readBooks = books.filter(book => { return book.shelf === 'read'; } );
      	
      	// bind the updateShelf method to pass scope up to App where update is made
      	let updateShelf = this.props.updateShelf.bind(this);
      
     	return (
        	<div className="list-books">
            	<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>
          	
          		{/* Book shelves */}
          		<div className="list-books-content">
              		<div>
          				<BookShelf title="Currently Reading" books={currBooks} updateShelf={updateShelf} />
						<BookShelf title="Want to Read" books={wantBooks} updateShelf={updateShelf} />
						<BookShelf title="Read" books={readBooks} updateShelf={updateShelf} />
          			</div>
          		</div>
          
          		<Link to='/search' className="open-search">Add a book</Link>
          	</div>
        );
    }      
}

export default MyReads;