import React, { Component } from 'react';
import VenueList from './VenueList'
import SearchBar from './SearchBar'

class Controller extends Component {

  render() {

  	const { venues, markers, handleListItemClick, updateSuperState } = this.props
    
    return (
    	<div className="controller-container">
    		<SearchBar
    			venues = {venues}
    			markers = {markers}
    			updateSuperState = {updateSuperState}
    		/>
	    </div>
    );
  }
}


export default Controller;