import React from 'react'
import {HashRouter} from 'react-router-dom'
import routes from './routes'

export default function App(){
    return(
        <HashRouter>
            {routes}
        </HashRouter>
    )
}

