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
  // As input query changed, venues that showing at the list will be changed
  handleFilterVenue = () => {
  	if(this.state.query.trim() !== "") {
  		const venues = this.props.venues.filter(venue => 
  		 	venue.name.toLowerCase().includes(this.state.query.toLowerCase())
  		)
	  	return venues
  	}
  	return this.props.venues
  }

  // As input query changed, markers on the map will be changed
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
    	<label className="input-wrapper" for={"search"}>
    		<i className="fas fa-search" />
    		<input type={"search"} id={"search"} placeholder={"Search venue..."} onChange={this.handleChange} />
    	</label>
    	<VenueList 
    		venues={this.handleFilterVenue()}
    		handleListItemClick = {this.props.handleListItemClick}
    	/>
    	</React.Fragment>
    );
  }
}



export default SearchBar;