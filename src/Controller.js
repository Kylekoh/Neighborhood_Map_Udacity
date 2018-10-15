import React, { Component } from 'react';
import SearchBar from './SearchBar'

class Controller extends Component {

  render() {

  	const { venues, markers, updateSuperState, handleListItemClick } = this.props
    
    return (
    	<section className="controller-container" role="application" aria-label="venueinfo">
    		<SearchBar
    			venues = {venues}
    			markers = {markers}
    			updateSuperState = {updateSuperState}
    			handleListItemClick = {handleListItemClick}
    		/>
	    </section>
    );
  }
}


export default Controller;