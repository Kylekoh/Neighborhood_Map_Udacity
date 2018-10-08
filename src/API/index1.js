import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
  	<GoogleMap
  	  defaultZoom={8}
  	  zoom={props.zoom}
  	  defaultCenter={{ lat: -34.397, lng: 150.644 }}
  	  center={props.center}
  	>
  	  {props.markers} &&
  	    props.markers
  	      .filter(marker => marker.isVisible)
  	      .map((marker, idx) => {
  	      	const venueInfo = props.venues.find(venue => venue.id === marker.id);
  	      	return (
  	      	  <Marker
  	      	    key={idx}
  	      	    position={{ lat: marker.lat, lng: marker.lng }}
  	      	    onClick={() => props.handleMarkerClick(marker)}
  	      	  >
  	      	    {marker.isOpen && venueInfo.bestPhoto && (
  	      	      <InfoWindow>
  	      	      	<React.Fragment>
  	      	      	  <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`} alt={"Venue"}/>
  	      	      	  <p>{venueInfo.name}</p>
  	      	      	</React.Fragment>
  	      	      </InfoWindow>
  	      	    )}
  	      	  </Marker>  
  	      	)
  	      })
  	</GoogleMap>      
  ))
)


class index1 extends Component {
  render() {
    return (
      <MyMapComponent
        {...this.props}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChbuMRkdicsgsk-asdQOu-qEoZajcP_P0"
		loadingElement={<div style={{ height: `100%` }} />}
		containerElement={<div style={{ height: `600px`}} />}
		mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}



export default map;