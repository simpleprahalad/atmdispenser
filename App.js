import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane';

class App extends Component {
  
    constructor() {
      super()
      this.state = {
        totalAmount : 0
      }
      this.parentCallback = this.parentCallback.bind(this)
    }

    parentCallback(data) {
      console.log("Parent Callback")
      console.log(data)
      this.setState({totalAmount:data})
    }
    
    render() {
      return (
        <div className="App">
          <Header/>

          <div className="lower-pane">
            <LeftPane callbackFromParent={this.parentCallback}/>
            <RightPane value={this.state.totalAmount}/>
          </div>
        </div>
      );
    }
}

export default App;
