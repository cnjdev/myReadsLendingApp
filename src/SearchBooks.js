import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class SearchBooks extends Component {
 	state = {
      	query: '',
      	books: []
    }
 
	updateQuery = (query) => {
      	// if search is blank, clear state and return
      	let search = query.trim();
      	if (search === ''){
         	this.setState({
            	query: '',
              	books: []
            });
          	return;
        }
      
      	// do search based on query and show results
        BooksAPI.search(query, 20)
      		.then( (data) => {          
          		// show results after returning from search
            	this.setState(() => ({
                	query: query,
               	 	books: data
            	}) );
        	});
  	}
  
	render() {
      	let query = this.state.query;
            
      	// create mapping of shelf by book based on user's shelves
      	let myBooks = this.props.books;
      	let myShelfByBook = {};
		myBooks.forEach((book) => {
        	myShelfByBook[book.id] = book.shelf;
        });
      
		// go through each book, setting shelf if user has book on any of its shelves
      	let books = this.state.books;
		if (books.length > 0){
          	books.forEach((book) => {
              	let myShelf = myShelfByBook[book.id];
              	if (myShelf !== undefined){
                  	book.shelf = myShelf;
             	}
          	});
		}

    	return (
        	<div className="search-books">
            	<div className="search-books-bar">
          			<Link to='/' className="close-search">Close</Link>
              		<div className="search-books-input-wrapper">
                        <input type="text" 
          					placeholder="Search by title or author"
          					value={query}
							onChange={(event) => this.updateQuery(event.target.value)}/>
            		</div>
            	</div>
            	<div className="search-books-results">
              		<ol className="books-grid">
						{books && books.map && 
                         books.map( (book) => (
                        	<li key={book.id}>
								{/* bind updateShelf method to pass scope up to App where update is made */}
                          		<Book book={book} updateShelf={this.props.updateShelf.bind(this)} />
                          	</li>
                        )) }
					</ol>
            	</div>
          	</div>
		);
	}
}
  
export default SearchBooks;