import React, { Component } from 'react';



class SearchBar extends Component {
  render() {
  	const { venues } = this.props
    return (
        <div className="button-container">	
    	  <button className="show-list">Show List</button>
    	  <button className="hide-list">Hide List</button>
    	  {venues.id}
    	</div>
    );
  }
}



export default SearchBar;