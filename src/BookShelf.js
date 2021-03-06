import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  
  	render() {
      	const { title, books } = this.props;
      
      	return (
			<div className="bookshelf">
    			<h2 className="bookshelf-title">{title}</h2>
       			<div className="bookshelf-books">
            		<ol className="books-grid">	
						{books.map( (book) => (
                  			<li key={book.id}>
								{/* bind updateShelf method passes scope up to containing MyReads */}
                  				<Book book={book} updateShelf={this.props.updateShelf.bind(this)} />
                  			</li>
                		)) }
					</ol>
				</div>
			</div>
		);
	}

} 

export default BookShelf;