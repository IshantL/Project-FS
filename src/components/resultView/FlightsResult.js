import React, { Component } from 'react';
import moment from 'moment';
import FLIGHTS from '../../Data/flights-json';
import FlightDetails from './Flight-details';
import FightData from '../../Data/flights-json'
import './flights.css';

class FlightsResult extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isReturnTrip: true,
      flights:FightData ,
      searchString: []
    };
  }

  componentWillMount() {
  }  

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  checkFlightAvailability(flight) {
    let searchString = this.state.searchString;
    let isOriginCityFlight = true, 
        isDestinationCItyFlight = true,
        isDepartDateFlight = true,
        isReturnDateFlight = true,
        isFlightWithInPrice = true;

    if (searchString.originCity) {
      isOriginCityFlight = (flight.from.toLowerCase() === searchString.originCity.toLowerCase());
    }

    if (searchString.destinationCity) {
      isDestinationCItyFlight = (flight.to.toLowerCase() === searchString.destinationCity.toLowerCase());
    }

    if (searchString.departureDate) {
      isDepartDateFlight = (flight.depart_date.format("D M YYYY") === searchString.departureDate.format("D M YYYY"));
    }

    if (searchString.returnDate && this.state.isReturnTrip) {
      isReturnDateFlight = (moment(flight.return_trip.depart_date).format("D M YYYY") === moment(searchString.returnDate._d).format("D M YYYY"));
    }

    if (searchString.price) {
      isFlightWithInPrice = (flight.price <= searchString.price.max && flight.price >= searchString.price.min);
    }            

    return isOriginCityFlight &&
           isDestinationCItyFlight &&
           isDepartDateFlight &&
           isReturnDateFlight &&
           isFlightWithInPrice;
  }

  render() {
    debugger;
      let flightList = this.state.flights.map((flight) => {
      return <FlightDetails FlightData={flight}></FlightDetails>
      });

      let flights = this.state.flights.filter((flight) => {
      flight.depart_date = moment(flight.depart_date);
      flight.return_trip.depart_date = moment(flight.return_trip.depart_date);
      return this.checkFlightAvailability(flight);
    })    

    /*let flightDetails = flights[0];
    if (flightDetails) {
      flightDetails = {
        ...flightDetails,
        depart_day: moment(flightDetails.depart_date).format("Do MMM YYYY"),
        return_day: moment(flightDetails.return_trip.depart_date).format("Do MMM YYYY")
      };    
    }*/

    return (
        <section className="flights">
       <div className="flight__container">
          {flightList}
        </div>
      </section>
    );
  }
}


export default FlightsResult;