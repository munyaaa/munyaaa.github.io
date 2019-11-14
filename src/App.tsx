import React from 'react';
import { Home, Experiences } from './pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/experiences" >
            <Experiences />
          </Route>
          <Route exact path="/skills" >
            <Experiences />
          </Route>
          <Route exact path="/projects" >
            <Experiences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
