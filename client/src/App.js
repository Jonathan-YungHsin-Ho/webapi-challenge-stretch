import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import ProjectList from './Components/ProjectList';
import ProjectDetails from './Components/ProjectDetails';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://webapi-challenge-jyh.herokuapp.com/api/projects')
      .then(res => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className='App'>
        <h1>
          <NavLink to='/'>Projects</NavLink>
        </h1>
        <Switch>
          <Route exact path='/'>
            <ProjectList projects={projects} />
          </Route>
          <Route path='/projects/:id'>
            <ProjectDetails projects={projects} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
