import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './containers/Landing';
import Courses from './containers/Courses';

const App = () => (
  <Router history={browserHistory}>
    <div className="App">
      <Route path='/' component={Landing} />
      <Route path='/courses' component={Courses} />
    </div>
  </Router>
);

export default App;
