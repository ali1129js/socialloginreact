/**
 * @Author: Ali
 * @Date:   2018-06-03T11:20:45+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-03T11:32:54+02:00
 */
 /**
  * @Author: Ali
  * @Date:   2018-06-03T10:47:42+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-03T11:32:54+02:00
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
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px"
            }}
          >
            <img src={picture} alt={name} />
            <h2>Welcome {name}</h2>
            Email: {email}
          </div>
        )
      } else {
        fbContent = (<FacebookLogin
          appId="1569409596517965"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />)
      }
     return (
       <div>{fbContent}</div>
     )
   }

 }
 export default Facebook
