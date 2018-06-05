/**
 * @Author: Ali
 * @Date:   2018-06-03T10:46:43+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-05T19:35:24+02:00
 */
import React, { Component } from 'react'
import Facebook from './Components/Facebook'
import Google from './Components/Google'
import Instagram from './Components/Instagram'
import GitHub from './Components/GitHub'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Facebook />
        <Google />
        <Instagram />
        <GitHub />
      </div>
    )
  }
}

export default App
