import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SignInSignUp from '../SignInSignUp'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Profile from '../Profile'

const MainPage = props=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignInSignUp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/profile" component={Profile}/>
        <Route render={()=><>Error 404! Page Not Found</>}/>
      </Switch>
    </BrowserRouter>
  ) 
}

export default MainPage