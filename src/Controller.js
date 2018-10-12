import React, { Component } from 'react';
import VenueList from './VenueList'
import SearchBar from './SearchBar'

class Controller extends Component {

  render() {

  	const { venues, center, marker } = this.props
    
    return (
    	<div className="controller-container">
    		<SearchBar
    			venues = {venues}
    		/>
	    	<VenueList 
			 	venues = {venues}
			 	marker = {marker}
	    	/>
	    </div>
    );
  }
}


export default Controller;