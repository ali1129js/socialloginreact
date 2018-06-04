/**
 * @Author: Ali
 * @Date:   2018-06-03T10:46:43+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-04T14:14:28+02:00
 */
import React, { Component } from 'react'
import Facebook from './Components/Facebook'
import Google from './Components/Google'
import Instagram from './Components/Instagram'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Facebook />
        <Google />
        <Instagram />
      </div>
    )
  }
}

export default App
