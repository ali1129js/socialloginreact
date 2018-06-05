/**
 * @Author: Ali
 * @Date:   2018-06-03T16:12:03+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-03T16:12:11+02:00
 */
 import React, { Component } from 'react'
 import FacebookLogin from 'react-facebook-login'

  class Facebook extends Component {
   constructor(props) {
     super(props)
     this.state = {
       isLoggedIn:false,
       userID: '',
       name:'',
       email:'',
       picture:''
     }
   }
   responseFacebook = response => {
     console.log(response)
     this.setState({
       isLoggedIn:true,
       userID: response.userID,
       name:response.name,
       email:response.email,
       picture:response.picture.data.url
     })
   }
   componentClicked = () => console.log('clicked')
   render() {
     const {isLoggedIn,name,email,picture} = this.state
     let fbContent
      if(isLoggedIn){
        fbContent = (
          <div
            style={{
              width: "300px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px"
            }}
          >
            <img src={picture} alt={name} />
            Welcome <h2>{name}</h2>
            Email: {email}
          </div>
        )
      } else {
        fbContent = (<FacebookLogin
          appId="**************************"
          autoLoad={true}
          fields="name,email,picture,hometown"
          scope="public_profile"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />)
      }
     return (
       <div>{fbContent}</div>
     )
   }
 }
 export default Facebook
