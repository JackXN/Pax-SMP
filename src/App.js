import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Homepage/Home';
import './App.css';

import Form from './components/pages/ApplicationPage/Form';
import NotFound from './components/pages/404';
function App() {
  return (
    <Router>
<Switch>
  <Route path = '/' exact={true} component = {Home}/>
  <Route path= '/apply' exact= {true} component={Form}/>
  <Route path = '/404' exact = {true} component={NotFound}/>
</Switch>
    </Router>
  );
}

export default App;
