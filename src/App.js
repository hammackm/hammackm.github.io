import React, {Component} from 'react';
import './App.css';

import Intro from './components/Intro';
import Body from "./components/Body";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Intro/>
          <Body/>
        </div>
    );
  }
}

export default App;
