/**
 * @Author: Ali
 * @Date:   2018-06-05T19:37:57+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-05T19:37:57+02:00
 */

import React, {Component} from 'react'
import GitHubLogin from 'react-github-login'

 class GitHub extends Component {

  render() {
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);
    return (
    <div>
      <GitHubLogin
        clientId="f9fb72dca8126127d80c"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>)
  }
}
export default GitHub
