import React, { Component } from 'react'
import Map from './Map'
// import SquareAPI from './API/'
import axios from 'axios';


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
      zoom: 12
    };
  }

  closeAllMarker = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    })
    this.setState({ markers: Object.assign(this.state.markers, markers)})
  }

  handleMarkerClick = marker => {
    this.closeAllMarker();
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers, marker)})
    // const venue = this.state.venues.find(venue => venue.id === marker.id)

    // SquareAPI.getVenueDetails(marker.id).then(res => {
    //   const newVenue = Object.assign(venue, res.response.venue)
    //   this.setState({ venues: Object.assign(this.state.venues, newVenue)})
    //   console.log(newVenue)
    // })
  }


  componentDidMount() {
    return api.get('/businesses/search', {
      params: {
        limit: 10,
        location: 'Portland, OR',
        categories: 'coffee,coffee shop',
      }
    }).then(results => {
       const venues = results.data.businesses
       const center = results.data.region.center
       console.log(center)
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
      }).catch(err => {
        console.log(err)
    })
  }

  render() {

    return (
      <div>
          <div className="app"> 
            <Map {...this.state} 
              handleMarkerClick={this.handleMarkerClick}
            />
          </div>  
      </div>
    );
  }
}

export default App;