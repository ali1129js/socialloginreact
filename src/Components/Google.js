/**
 * @Author: Ali
 * @Date:   2018-06-03T17:40:43+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-04T14:14:44+02:00
 */
import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'

 class Google extends Component {

  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
    <div>
      <GoogleLogin
        clientId="864476898060-idnv18f0blb29lpjms3dcg5qao8510ca.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      ></GoogleLogin>
    </div>)
  }
}
export default Google
