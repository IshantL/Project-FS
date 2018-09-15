import React, { Component } from 'react';
import moment from 'moment';
import FlightDetails from './Flight-details';
import FlightData from '../../Data/flights-json'
import './flights.css';

class FlightsResult extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isReturnTrip: true,
      flights:FlightData ,
      searchData:'',
      returnFlight:''
    };
    this.checkFlightAvailability=this.checkFlightAvailability.bind(this);
  }

  componentWillReceiveProps (nextProps){
    this.setState({searchData:nextProps.data});
  }


  checkFlightAvailability(flight) {
    debugger;
    let result=this.state.searchData;

       if((result.originCity===flight.from_code) &&(result.destinationCity===flight.to_code) && ((result.price.min<=flight.price)&&(flight.price<=result.price.max))){ 
      if(result.returnTrip){
        if((moment(result.startDate._d).format("D M YYYY") === moment(flight.arrive_date).format("D M YYYY"))){
          flight.returnTrip=true;
          flight.endDate=result.endDate;
           return flight
        }
      }
    
      else{
        if((moment(result.date._d).format("D M YYYY") === moment(flight.arrive_date).format("D M YYYY"))){
          flight.returnTrip=false;
           return flight
        }
        }
      }    

  }

  render() {

      var flightsAvailable;  
      if(this.state.searchData===''){
        flightsAvailable= this.state.flights.map((flight)=> {
          debugger;
            return <FlightDetails FlightData={flight}></FlightDetails>
      });
      }
      else{
       flightsAvailable= this.state.flights.map((flight)=> {
            return <FlightDetails FlightData={this.checkFlightAvailability(flight)}></FlightDetails>
      });
     }
    return (
        <section className="flights">
       <div className="flight__container">
        <h2>Available Flights:</h2>
          {flightsAvailable}
        </div>
      </section>
    );
  }
}

export default FlightsResult;