import React, { Component } from 'react';
import './flights.css'

class FlightDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReturnTrip: true,
      bookingText: 'Book this flight'
    }
  }

  componentDidMount() {
  }  

  componentWillUnmount() {
  }

  render() {
  
    return (
      <div>
        Display block data::::
        {this.props.FlightData.airline}
      </div>
      );
 }
}

export default FlightDetails;