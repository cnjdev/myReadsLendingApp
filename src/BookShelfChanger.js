import React, { Component } from 'react';

class BookShelfChanger extends Component {
  	
  	/* 
    	call the method to update the shelf
  		scope will pass up from BookShelfChanger > Book 
        then to either of these paths:
  		main: > BookShelf > MyReads > App
  		search: > SearchBooks > App
  	 	the method to update the shelf is implemented in App
    */
	changeShelf(event) {
    	this.props.updateShelf(this.props.bookId, event.target.value);
    }
  
	render(){
      	// if no shelf is set, set it to none
      	let shelf = this.props.shelf;
      	if (shelf === null || shelf === undefined)
          	shelf = 'none';
      
  		return (
    		<div className="book-shelf-changer">
    			<select value={shelf} onChange={ this.changeShelf.bind(this) } >
    				<option value="move" disabled>Move to...</option>
  					<option value="currentlyReading">Currently Reading</option>
  					<option value="wantToRead">Want to Read</option>
  					<option value="read">Read</option>
  					<option value="none">None</option>
    			</select>
    		</div>
       );
    }

}

export default BookShelfChanger;