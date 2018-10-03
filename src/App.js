import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline, Polygon} from 'google-maps-react';
 
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(props)
    console.log(marker)
    console.log(e)
  }    

 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  render() {
    const triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ]

    return (
      <Map google={this.props.google} 
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}
            onClick={this.onMapClicked}
            zoom={14}
            initialCenter={{
              lat: 45.519091,
              lng: -122.679295
            }}>
            <Marker onClick={this.onMarkerClick}  
                    name={'Pioneer Square'} />
            <InfoWindow
              content={contentString}
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>  
            </InfoWindow>          
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyChbuMRkdicsgsk-asdQOu-qEoZajcP_P0")
})(MapContainer)