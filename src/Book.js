import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger'
import './App.css'

class Book extends Component {
  
	render() {
      	const { book } = this.props;
      	// check if there are imageLinks when trying to set the background image
      	let backgroundImage = book.imageLinks != null ? book.imageLinks.thumbnail : null;
      	// join the authors of a book together into a string
      	let authors = book.authors != null ? book.authors.join(', ') : '';
      
      	return (
			<div className="book">
  				<div className="book-top">
  					<div className="book-cover" 
  						style={ { 
          					width: 128, 
          					height: 193, 
  							backgroundImage: `url(${backgroundImage})` 
						} }>
					</div>

					{/* 
						control to change the book's shelf
						note: binding method passes scope back up to containing search page or book shelf
					*/}
					<BookShelfChanger bookId={book.id} shelf={book.shelf} 
						updateShelf={this.props.updateShelf.bind(this)} />
				</div>
		
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{authors}</div>
			</div>
		);
	}

}

export default Book;