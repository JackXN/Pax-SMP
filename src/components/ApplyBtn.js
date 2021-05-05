import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import "./ApplyBtn.css"
import NotFound from './pages/404';

function ApplyBtn() {
    return (
        <Router>
        <div className = 'buttonContainer'>
            
        <button type='button'> <a href='/404'>Shop</a></button>
    
        <button type='button'> <a href='https://discord.gg/hbsHm5he'>Discord</a></button>
        <button type='button'><a href="/404">Events</a></button>

        <button type='button'><a id='about' href='/404'>About us</a></button>
        <Switch>
            <Route exact={true} path='/404'>
                <NotFound/>
            </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default ApplyBtn
