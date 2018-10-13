import React, { Component } from 'react';
import VenueList from './VenueList'


class SearchBar extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
    	query: "",
    	venues: [],
  	}
  }

  handleFilterVenue = () => {
  	if(this.state.query.trim() !== "") {
  		const venues = this.props.venues.filter(venue => 
  		 	venue.name.toLowerCase().includes(this.state.query.toLowerCase())
  		)
	  	return venues
  	}
  	return this.props.venues
  }

  handleChange = (e) => {
  	this.setState({ query: e.target.value })
  	
  	const markers = this.props.venues.map(venue => {
  		const isMatched = venue.name.toLowerCase().includes(e.target.value.toLowerCase())
  		const marker = this.props.markers.find(marker => marker.id === venue.id)
  		if(isMatched) {
  			marker.isVisible = true;
  		} else {
  			marker.isVisible = false;
  		}
  		return marker
  	})
  	this.props.updateSuperState({ markers })
  }

  render() {
    return (
    	<React.Fragment>
    	<input type={"search"} id={"search"} placeholder={"eg. StumpTown"} onChange={this.handleChange} />
    	<VenueList 
    		venues={this.handleFilterVenue()}
    	/>
    	</React.Fragment>
    );
  }
}



export default SearchBar;