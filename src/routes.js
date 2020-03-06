import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/home.js'
import Menu from './Components/Menu/menu.js'


export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/menu' component={Menu}/>

    </Switch>
)