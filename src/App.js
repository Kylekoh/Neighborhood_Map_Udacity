import React, { Component } from 'react'
import Map from './Map'
import SquareAPI from './API/'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12
    };
  }

  componentDidMount() {
    SquareAPI.search({
      near: "Austin, TX",
      query: "tacos",
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true
        }
      })
      this.setState({ venues, center, markers })
      console.log(results)
    })
  }

  render() {

    return (
      <div>
          <div className="app"> 
            <Map {...this.state} />
          </div>  
      </div>
    );
  }
}

export default App;