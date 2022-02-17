import React, { useState } from "react";
import './App.css';
import Messenger from "./component/Messenger";
import {Route,Switch} from "react-router-dom"
import Home from "./component/Home"
import Header from "./component/Header";
import ShopList from "./component/ShopList";

function App () {

  return (
   <div>
     <Header />
     <Switch>
       <Route exact path = "/" component = {Home}/>
       <Route path = "/messenger" component = {Messenger} />
       <Route path = "/shoplist" component = {ShopList} />
     </Switch>
   </div>
  )
}

export default App;
