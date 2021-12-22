import React, {Component} from 'react'
import Navbar from './components/common/Navbar'
import './App.css'
import Routes from './components/common/Routes'

class App extends Component {
  rendert() {
    return (
      <div className = 'App'>
        <Navbar />
        <Routes />
      </div>
    )
  }
}
 export default  App