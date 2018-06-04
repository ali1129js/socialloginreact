/**
 * @Author: Ali
 * @Date:   2018-06-03T17:40:43+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-03T17:50:05+02:00
 */
import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'
const responseGoogle = (response) => {
  console.log(response);
}
 class Google extends Component {
  render() {
    return (
    <div>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      >hh</GoogleLogin>
    </div>)
  }
}
export default Google
