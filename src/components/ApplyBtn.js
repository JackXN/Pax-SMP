import React from 'react'
import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom';
import "./ApplyBtn.css"
import NotFound from './pages/404';

function ApplyBtn() {
    return (
        <Router>
        <div className = 'buttonContainer'>
            <Link to='/404'>
        <button type='button'>Shop</button>
        </Link>
        <button type='button'> <a href='https://discord.gg/hbsHm5he'>Discord</a></button>
        <Link to ='/404'>
        <button type='button'><a href="">Events</a></button>
        </Link>
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
