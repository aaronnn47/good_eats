import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/home.js'
import Menu from './Components/Menu/menu.js'


export default(
    <Switch>
        <Routes exact path='/' component={Home}/>
        <Routes path='/menu' component={menu}/>

    </Switch>
)