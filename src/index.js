import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './components/homepage';
import StopPoint from './components/Stop';
// import Favourites from './components/Favourites';
import Search from './components/search';
import SearchGeo from './components/search/SearchGeo';

import RouteOptions from './components/routeplanner/RouteOptions';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


const router = (
  <Router>
    <div className="app-wrapper">
      <Route exact path="/" component={Homepage} />
      <Route path="/stop/:stopPoint" component={StopPoint} />
      <Route path="/search/:terms" component={Search} />
      <Route path="/search-location/:lat/:lng" component={SearchGeo} />

      <Route path="/route/:from/:to" component={RouteOptions} />

      <footer className="app-footer">
        <p>Built by <a href="//www.tomgowans.com">Tom Gowans</a></p>
        <p>Data provided by <a href="https://www.tfl.gov.uk">TfL</a></p>
      </footer>
    </div>
  </Router>
)
// <Favourites />


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
