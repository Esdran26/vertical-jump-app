import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ExercisesPage from './pages/ExercisesPage';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/exercises" component={ExercisesPage} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
