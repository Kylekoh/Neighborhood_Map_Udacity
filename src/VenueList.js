import React, { Component } from 'react';

class VenueList extends Component {
  
  render() {
  	
    return (
	    <ol className="venue-list-wrapper">
	      {this.props.venues && 
	      this.props.venues.map((venue, id) =>
	        <li key={venue.id} className="venue-list" onClick={() => this.props.handleListItemClick(venue)}>
	          <img src = {`${venue.image_url}`} className="list-image" alt={`${venue.name}`} />   
	          <span>{venue.name}</span>
	        </li>
	      )}
	    </ol>

    );
  }
}

export default VenueList;