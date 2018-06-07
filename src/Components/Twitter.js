/**
 * @Author: Ali
 * @Date:   2018-06-05T20:41:01+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-07T10:49:46+02:00
 */
 import React, {Component} from 'react'
 import TwitterLogin from 'react-twitter-auth'

  class Twitter extends Component {
     onSuccess = response => console.log(response);
     onFailure = response => console.error(response);
   render() {
     return (
     <div>
       <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
       onFailure={this.onFailed}
       onSuccess={this.onSuccess}
       requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
     </div>
   )
   }
 }
 export default Twitter
