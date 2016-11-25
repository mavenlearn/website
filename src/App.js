import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './containers/Landing';
import Courses from './containers/Courses';
import Apprentice from './containers/Apprentice.jsx';
import Immersive from './containers/Immersive.jsx';
import Workshops from './containers/Workshops.jsx';

const App = () => (
  <Router history={browserHistory}>
    <div className="App">
      <Route path='/' component={Landing} />
      <Route path='/courses' component={Courses} />
      <Route path='/apprentice' component={Apprentice} />
      <Route path='/immersive' component={Immersive} />
      <Route path='/workshops' component={Workshops} />
    </div>
  </Router>
);

export default App;
