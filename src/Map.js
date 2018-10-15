import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

// set google map api using React google map library 'react-google-maps'
// more information about it, please refer 'https://tomchentw.github.io/react-google-maps/#installation'
const MyMapComponent = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap
			ref={props.onMapMounted}
			defaultZoom={8}
			zoom={props.zoom}
			defaultCenter={{ lat: -122.654113, lng: 45.5157853 }}
			center={{ 
				lat: props.center.latitude,
				lng: props.center.longitude
			}}
		> 	
			{props.markers && 
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
						  {marker.isOpen && venueInfo.image_url && (	
							<InfoWindow>
							  <div className="infowindow-wrapper">
							    <img src={`${venueInfo.image_url}`} alt={`${venueInfo.name}`} style={{width: "200px", height: "200px"}}/>
								<p>Name : {venueInfo.name}</p>
								<p>Phone : {venueInfo.phone}</p>
							  </div>
							</InfoWindow>
						  )}	
						</Marker>
					);	
					})}	

		</GoogleMap>
	))
);


class Map extends Component {
  render() {
    return (
      <MyMapComponent
      	{...this.props}
      	isMarkerShown
      	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChbuMRkdicsgsk-asdQOu-qEoZajcP_P0"
		loadingElement={<div style={{ height: `100%` }} />}
		containerElement={<section className="map-container" role="application" aria-label="location"/>}
		mapElement={<div style={{ height: `100%` }} />}
	  />	
    );
  }
}

export default Map;