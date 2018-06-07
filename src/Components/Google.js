/**
 * @Author: Ali
 * @Date:   2018-06-03T17:40:43+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-07T10:49:21+02:00
 */
import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'

 class Google extends Component {
    responseGoogle = (response) => {
     console.log(response);
   }
  render() {
    return (
    <div>
      <GoogleLogin
        clientId="**************************"
        buttonText="Login With Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      ></GoogleLogin>
    </div>)
  }
}
export default Google
