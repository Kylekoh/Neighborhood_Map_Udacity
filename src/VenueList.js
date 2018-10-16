import React, { Component } from 'react';

class VenueList extends Component {
  
  render() {
  	
    return (
	    <ol className="venue-list-wrapper" tabIndex="0">
	    <span id="venue-label" className="venue-label">Coffee Shop List...</span>
	      {this.props.venues && 
	      this.props.venues.map((venue, id) =>
	        <li key={venue.id} className="venue-list" tabIndex="0" aria-labelledby="venue-label" onClick={() => this.props.handleListItemClick(venue)}>
	          <img src = {`${venue.image_url ? venue.image_url : './img/cat1.jpg'}`} className="list-image" alt={`${venue.name}`} />   
	          <span>{venue.name ? venue.name : "Unknown"}</span>
	        </li>
	      )}
	    </ol>
    );
  }
}

export default VenueList;