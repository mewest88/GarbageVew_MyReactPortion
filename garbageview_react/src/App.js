import React, { Component } from 'react';
import './App.css';
import GC from './GC.js'
// import AddGC from './AddGC.js'
// import GCJsonIn from './GCJsonIn';
import { subscribeToTimer } from './api';
import NetPerformance from './NetPerformance';
import { throws } from 'assert';
// import logo from './logo.svg';

class App extends Component {

  //{gctype: 'test1', gctime: '25', id: 1}
  state = {
    gcs: [
        {gctype: 'test1', gctime: 25, id: 0}
    ]
  }

  constructor(props) {
    super(props);
  
    subscribeToTimer((err, gc) => 
      this.addGC(gc));
  }

  addGC = (gc) => {
    let gcsCopy = [...this.state.gcs, gc]
    this.setState({
      gcs: gcsCopy
    })
    console.log(this.state.gcs);
  }

  /**
   * Counts the number of JSON entries in the gcs array
   * This is the number for GC events that the server has sent over to the React socket
   */
  countGC = () => { return this.state.gcs.length; }
  
  render() {
    return (
      <div className="App">
        <h1>Welcome to GarbageView</h1>
        <p>Number of Garbage Collectors: {this.countGC()}</p>
        <p>Total time of all GC events: (calling NetPerformance below)</p>
        <NetPerformance np = {this.state.gcs}/>
        <p>List of Garbage Collectors:</p>
        <GC gcs = {this.state.gcs}/>
        {/* <AddGC addGC = {this.addGC} /> */}
        {/* <GCJsonIn aggGC = {this.addGC} /> */}
      </div>
    );
  }
}

export default App;
