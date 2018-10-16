/* global google */

import React, { Component } from 'react'
import Map from './Map'
import axios from 'axios';
import Controller from './Controller'
import './App.css';


// set the api using axios to fetch from YELP api
const YELP_API_KEY = "GrUMHFgMBaO_tufUneZYR9GQT6qY_ygfTpdEKMEJB8neWXEUOctSxA47tDh-X1seI58cDFN1YZggv1JT7H84B0oTJsZXjm8y4P_GiR32FznokaUVxv4wGxoXNQa7W3Yx"

const api = axios.create({
  baseURL: 'https://shielded-hamlet-43668.herokuapp.com/https://api.yelp.com/v3',
  method: 'GET',
  json: true,
  headers: {
    authorization : `Bearer ${YELP_API_KEY}`
  }
})

class App extends Component {
  constructor() {
    super();

    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12,
      updateSuperState: obj => {
        this.setState(obj)
      }
    };
  }

  // This function will close the all the markers that opened
  closeAllMarker = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    })
    console.log(markers)
    this.setState({ markers: Object.assign(this.state.markers, markers)})
  }

  // When user click the each marker, Infowindow that has information about marker
  // will be pop up and other infowindow will be closed whenever click event happened
  handleMarkerClick = marker => {
    this.closeAllMarker();
    marker.isOpen = true; 
    this.setState({ markers: Object.assign(this.state.markers, marker)})
    const venue = this.state.venues.find(venue => venue.id === marker.id)
    api.get(`/businesses/${venue.id}`).then(res => { 
      const newVenue = Object.assign(venue, res.data)
      this.setState({ venues: Object.assign(this.state.venues, newVenue)})
    })
  }

  // When user click one of the venue in the venue list, Infowindow on the map 
  // will be pop up by handleMarkerClick function 
  handleListItemClick = venue => {
    console.log(venue)
    const marker = this.state.markers.find((marker) => venue.id === marker.id)
    this.handleMarkerClick(marker)    
  }

  // This function needs to control the hamburger menu bar
  // When screen width reach under 650px, hamburger menu bar will be pop up
  // and controller-container will be disappeared.
  // And controller-container will be toggled by clicking hamburger menu bar
  toggleMenuBars = () => {
    const linksEL = document.getElementsByClassName("controller-container")[0]
    if(linksEL.style.display === 'flex') {
      linksEL.style.display = 'none'
    }else {
      linksEL.style.display = 'flex'
    }
  }

// Set the data variations that come from YELP api
// from '/business/search' api, we will use information about coffee shop in the portland
  componentDidMount() {
    return api.get('/businesses/search', {
      params: {
        limit: 15,
        location: 'Portland, OR',
        categories: 'coffee,coffee shop',
      }
    }).then(results => {
       const venues = results.data.businesses
       const center = results.data.region.center
       const markers = venues.map(venue => {
        return {
          lat: venue.coordinates.latitude,
          lng: venue.coordinates.longitude,
          isOpen: false,
          isVisible: true,
          id: venue.id
        }
       })
        this.setState({ venues, center, markers })
      }).catch(() => {
        alert("Please check your internet connection or Yelp api key")
    })
  }

  render() {

    return (
          <React.Fragment>
          <nav className="nav-wrapper" role="navigation" aria-label="Navigator" tabIndex="0">
            <i className="fas fa-bars" onClick={this.toggleMenuBars} aria-label="search menu"></i>
            <span className="main-title">AWESOME COFFEE IN THE PORTLAND</span>
          </nav>
          <main className="app"> 
            <Controller
              {...this.state}
              handleListItemClick={this.handleListItemClick}
            />
            <Map {...this.state} 
              handleMarkerClick={this.handleMarkerClick}
            />
          </main>
          </React.Fragment> 
    );
  }
}

export default App;