/**
 * @Author: Ali
 * @Date:   2018-06-04T14:06:59+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-04T14:15:12+02:00
 */
import React, {Component} from 'react';
import InstagramLogin from 'react-instagram-login'
 class Instagram extends Component {

  render() {
    const responseInstagram = (response) => {
    console.log(response);
  }
    return (
      <InstagramLogin
        clientId="6a293500b19640709cae6f25c657cfa8"
        buttonText="Login With Instagram"
        onSuccess={this.responseInstagram}
        onFailure={this.responseInstagram}
      />
    )
  }
}
export default Instagram
