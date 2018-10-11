import React, { Component } from 'react'
import Map from './Map'
import axios from 'axios';

const YELP_API_KEY = ""

const api = axios.create({
  baseURL: 'https://shielded-hamlet-43668.herokuapp.com/https://api.yelp.com/v3',
  method: 'GET',
  json: true,
  headers: {
    authorization: `Bearer ${YELP_API_KEY}`
  }  
})

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      venues: [],
      markers: [],
      ceneter: [],
      zoom: 12
    };
  }

  closeAllMarker = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker
    })
    this.setState({ markers: Object.assign(this.state.markers, markers)})
  }

  handleMarkerClick = marker => {
    this.closeAllMarker();
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers, marker)})
    const venue = this.state.venues.find(venue => venue.id === marker.id)
    api.get(`/business/${venue.id}`).then(res => {
      const newVenue = Object.assign(venue, res.data)
      this.setState({ venues: Object.assign(this.state.venues, newValue)})
    })
  }

  componentDidMount() {
    return api.get('/business/search', {
      params: {
        limit: 20,
        location: 'Portland, OR',
        categories: 'coffee, coffee shop',
      }
    }).then(results => {
      const venues = results.data.business
      const center = results.data.region.center
      const markers = venues.map(venue => {
        return {
          lat: venue.coordinates.latitude,
          lng: venue.coordinates.longitude,
          isOpen: false,
          isVible: true,
          id: venue.id
        }
      })
      this.setStae({ venues, center, markers })
    }).catch(err => {
      console.log(err)
    })
  }
}

render() {
  return (
    <div>
      <div className="app">
        <Map {...this.state}
          handleMarkerClick = {this.handleMarkerClick}
        />
      </div>
    </div>
  )
}















































