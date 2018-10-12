import React, { Component } from 'react';

class Controller extends Component {

  render() {
  	const { venues, center, marker} = this.props
  	console.log(venues)
    return (
    	<div className="controller-container">
	        <div className="button-container">	
	    	  <button className="show-list">Show List</button>
	    	  <button className="hide-list">Hide List</button>
	    	</div>
	    	<div className="venue-list-container">
			    <ol className="venue-list-wrapper">
			      {this.props.venues.map((venue) =>
			        <li key={venue.id} className="venue-list">
			          <img src = {`${venue.image_url}`} className="list-image" />   
			          {venue.name}
			        </li>
			      )}
			    </ol>
		    </div>
	    </div>
    );
  }
}


export default Controller;