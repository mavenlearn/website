import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './containers/Landing';
import Courses from './containers/Courses';
import CoursePage from './containers/CoursePage';

const App = () => (
  <Router history={browserHistory}>
    <div className="App">
      <Route path='/' component={Landing} />
      <Route path='/courses' component={Courses} />
      <Route path='/apprentice' component={CoursePage} />
      <Route path='/immersive' component={CoursePage} />
      <Route path='/workshop' component={CoursePage} />
    </div>
  </Router>
);

export default App;
