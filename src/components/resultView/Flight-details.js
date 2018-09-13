import React, { Component } from 'react';
import './flights.css';
import moment from 'moment';


class FlightDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReturnTrip: false,
      bookingText: 'Book this flight'
    }
  }

  componentWillReceiveProps (nextProps){
    debugger;
      if(nextProps.FlightData!==undefined){
          if(nextProps.FlightData.returnTrip){
            this.setState({isReturnTrip:nextProps.FlightData.returnTrip});
          }else{
            this.setState({isReturnTrip:nextProps.FlightData.returnTrip});            
          }  
        }
      }
  render() {
    debugger;
    
      if(this.props.FlightData!==undefined){
        let flight = this.props.FlightData;
    flight.depart_time = moment(this.props.FlightData.depart_date).format("hh:mm A");
    flight.arrive_time = moment(this.props.FlightData.arrive_date).format("hh:mm A");

    /*let returnTrip = flight.return_trip;
    returnTrip.depart_time = moment(returnTrip.depart_date).format("hh:mm A");
    returnTrip.arrive_time = moment(returnTrip.arrive_date).format("hh:mm A");   */ 
    return (

      <div className="flight" ref="flightRef">
        <div className="flight__details">
          <h3 className="flight__price">₹ {this.props.FlightData.price}</h3>

          <div className="flight__timings">
            <div className="flight__departure">
              <p className="flight__number">{this.props.FlightData.number.toUpperCase()}</p>
              <p className="flight__codes">{this.props.FlightData.from_code} &raquo; {this.props.FlightData.to_code}</p>
              <p className="flight__depart__time">Depart: {flight.depart_time}</p>
              <p className="flight__arrive__time">Arrive: {flight.arrive_time}</p>
            </div>
             { 
              this.state.isReturnTrip &&
              <div className="flight__return">
                <p className="flight__number">aa</p>
                <p className="flight__codes">vv</p>
                <p className="flight__depart__time">dd</p>
                <p className="flight__arrive__time">ff</p>
              </div>
            }
            
          </div>

        </div>

        <div className="flight__logo">
          <div className={`airline ${this.props.FlightData.airline_code}`}></div>
          <button 
            className="booking--button"
            onClick={() => this.setState({bookingText: 'Booked'})}>
            {this.state.bookingText}
          </button>
        </div>
      </div>    

      );
    }else{
      return(<span></span>
        )
    }
 }
}

export default FlightDetails;