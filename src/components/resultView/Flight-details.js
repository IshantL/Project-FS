import React, { Component } from 'react';
import moment from 'moment';
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
      <div></div>
      );
 }
}

export default FlightDetails;