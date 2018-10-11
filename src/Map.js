import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, KmlLayer } from 'react-google-maps'


const MyMapComponent = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap 
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
							  <React.Fragment>
							    <img src={`${venueInfo.image_url}`} alt={"Venue"} style={{width: "200px", height: "200px"}}/>
								<p>{venueInfo.name}</p>
								<p>{venueInfo.phone}</p>
							  </React.Fragment>
							</InfoWindow>
						  )}	
						</Marker>
					);	
					})}
			<KmlLayer
		      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
		      options={{ preserveViewport: true }}
   		    />				
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
		containerElement={<div style={{ height: `600px`}} />}
		mapElement={<div style={{ height: `100%` }} />}
	  />	
    );
  }
}

export default Map;