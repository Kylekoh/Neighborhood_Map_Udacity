import React, { Component } from 'react';

class VenueList extends Component {
  render() {

  	const { venues, marker } = this.props
    return (
    	<div className="venue-list-container">
		    <ol className="venue-list-wrapper">
		      {this.props.venues.map((venue) =>
		        <li key={venue.id} className="venue-list">
		          <img src = {`${venue.image_url}`} className="list-image" />   
		          <span>{venue.name}</span>			         
		        </li>
		      )}
		    </ol>
		</div>
    );
  }
}

export default VenueList;