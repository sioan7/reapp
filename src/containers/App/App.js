import React, {Component} from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from '../Home/Home'
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    )
  }
}

export default App
