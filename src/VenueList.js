import React, { Component } from 'react';

class VenueList extends Component {
  
  render() {
  	
    return (
	    <ol className="venue-list-wrapper" tabindex="0">
	      {this.props.venues && 
	      this.props.venues.map((venue, id) =>
	        <li key={venue.id} className="venue-list" tabindex="0" onClick={() => this.props.handleListItemClick(venue)}>
	          <img src = {`${venue.image_url ? venue.image_url : './img/cat1.jpg'}`} className="list-image" alt={`${venue.name}`} />   
	          <span>{venue.name ? venue.name : "Unknown"}</span>
	        </li>
	      )}
	    </ol>

    );
  }
}

export default VenueList;