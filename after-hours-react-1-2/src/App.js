import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';

class App extends Component {
  constructor(){
    super();

    let monthDays = {
      Jan: 31,
      Feb: 28,
      Mar: 31,
      Apr: 30,
      May: 31,
      Jun: 30,
      Jul: 31,
      Aug: 31,
      Sep: 30,
      Oct: 31,
      Nov: 30,
      Dec: 31
    }

    function pickColor(){
      let r = Math.floor( Math.random() * 256 )
      let g = Math.floor( Math.random() * 256 )
      let b = Math.floor( Math.random() * 256 )
      return `rgb(${r}, ${g}, ${b}`
    }
    
    let days = []
    let monthColors = {}

    for( let month in monthDays ){
      if(!monthColors[month]) monthColors[month] = pickColor()
      for( let i=1; i<=monthDays[month]; i++){
        days.push({
          month: month,
          day: i,
          color: monthColors[month]
        })
      }
    }

    this.state = {
      days: days
    }
  }

  addAppointment = (i, appointment) => {
    let days = this.state.days.slice()
    days[+i].appointment = appointment
    this.setState({
      days: days
    })
  }

  render() {

    
    
    let displayDays = this.state.days.map( day => {
      return(
        <div style={{
          width: 150,
          height: 150,
          background: day.color
        }}>
          { `${day.month} - ${day.day}` }
          <br />
          { day.appointment && day.appointment}
        </div>
      )
    })

    return (
      <div>
        <Form
          submit={ this.addAppointment } 
          days={ this.state.days } />
        <div className="App">

        {displayDays}

        </div>
      </div>
    );
  }
}

export default App;
