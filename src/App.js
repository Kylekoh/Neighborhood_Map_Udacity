/* eslint-disable no-undef */

import React, { Component } from "react"
import Map from './Map';


class App extends Component {
  
  render() {
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }
    
    return (
      <div>
          This is the REACT APP!
          <div style={{width:500, height:600, backgorund:'red'}}> 
            <Map center={location} />
          </div>  
      </div>
    );
  }
}

export default App;