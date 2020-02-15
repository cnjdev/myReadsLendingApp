import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'
import './App.css'

class App extends Component {
	
  	state = {
      	books: []
    }
  
	fetchBooks() {
      	// search for a user's categorized books
        BooksAPI.getAll().then( (books) => {
        	this.setState({
            	books: books
            });
        });
    }

	updateShelf(bookId, shelf) {
      	// update the book's shelf
     	BooksAPI.update({id: bookId}, shelf)
			.then((json) => {
              	// after updating the book's shelf, get the updated books and refresh
            	this.fetchBooks();
            });
    }

  	componentDidMount() {
		this.fetchBooks();
    }

	render() {
      	return (     
          	<div className="app">
             
             	{/* Search screen */}
              	<Route path='/search' render={ ({history}) => (
                	<SearchBooks books={this.state.books}
      					updateShelf={(bookId, shelf) => {
          					this.updateShelf(bookId, shelf);
          					history.push('/');
        				} } 
					/>
              	) } />

				{/* Main screen with Shelves */}
				<Route exact path='/' render={ () => (
          			<MyReads books={this.state.books} 
						updateShelf={this.updateShelf.bind(this)} />
        		) } />
 
			</div>
    	)
  	}
}

export default App;
