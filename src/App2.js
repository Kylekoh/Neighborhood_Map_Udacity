import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'


const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      zoom={props.zoom}
      defaulCenter={{ lat: -122.654113, lng: 45.515785 }}
      center={{
        lat: props.center.latitude,
        lng: props.center.longitude
      }}
    >
      {props.markers &&
        props.markers
          .filter(marker => marker.isVisible)
          .map((marker, idx) => {
          const venueInfo = props.venues.find(venue => venue.id === marker.id)
          return (
            <Marker
              key={idx}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => props.handleMarkerClick(marker)}
            >
              {marker.isOpen && venueInfo.image_url && (
                <InfoWindow>
                  <React.Fragement>
                    <img src={`${venueInfo.image_url}`} alt={"Venue"} style={{ width: "200px", height: "200px"}}/>
                    <p>{venueInfo.name}</p>
                    <p>{venueInfo.phone}</p>
                  </React.Fragement>
                </InfoWindow>
              )}
            </Marker>  
          )
          })
      }
    </GoogleMap>
  ))
)

class Map extends Component {
  render() {
    retrun {
      <MyMapComponent
        {...this.props}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChbuMRkdicsgsk-asdQOu-qEoZajcP_P0"
        loadingElement={<div style={{ heightL `100%` }} />}
        containerElement={<div style={{ heightL `600px` }} />}
        mapElement={<div style={{ heightL `100%` }} />}
      />
    }
  }
}













