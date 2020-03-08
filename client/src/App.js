import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import GlobalStyle from './styled-components/GlobalStyle';

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
        <GlobalStyle />
        <Header>
          <NavLink to='/'>Projects</NavLink>
        </Header>
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

const Header = styled.h1`
  margin: 2rem 0;
  font-size: 2.5rem;
`;

export default App;
