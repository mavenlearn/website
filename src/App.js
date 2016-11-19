import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './containers/Landing';

const App = () => (
  <Router history={browserHistory}>
    <div className="App">
      <Route path='/' component={Landing} />
    </div>
  </Router>
);

export default App;
