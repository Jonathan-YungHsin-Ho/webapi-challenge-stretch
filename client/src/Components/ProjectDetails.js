import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Action from './Action';
import AddAction from './AddAction';

export default function ProjectDetails({ projects }) {
  const [actions, setActions] = useState([]);
  const [project, setProject] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://webapi-challenge-jyh.herokuapp.com/api/projects/${id}/actions`,
      )
      .then(res => {
        // console.log(res);
        setActions(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    setProject(projects.find(project => project.id === Number(id)));
  }, [projects, id]);

  return (
    <div>
      <ListHeader>Project: {project && project.name}</ListHeader>
      <ListWrapper>
        {actions.map(action => (
          <Action key={action.id} action={action} />
        ))}
        <AddAction />
      </ListWrapper>
    </div>
  );
}

const ListHeader = styled.h2`
  font-size: 2rem;
`;

const ListWrapper = styled.div`
  border: 1px solid black;
  width: 96%;
  max-width: 400px;
  margin: 1rem auto;
`;
