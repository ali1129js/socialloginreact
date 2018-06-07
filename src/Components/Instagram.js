/**
 * @Author: Ali
 * @Date:   2018-06-04T14:06:59+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-07T10:50:04+02:00
 */
import React, {Component} from 'react';
import InstagramLogin from 'react-instagram-login'
 class Instagram extends Component {
    responseInstagram = (response) => {
   console.log(response);
 }
  render() {
    return (
      <InstagramLogin
        clientId="************************"
        buttonText="Login With Instagram"
        onSuccess={this.responseInstagram}
        onFailure={this.responseInstagram}
      />
    )
  }
}
export default Instagram
