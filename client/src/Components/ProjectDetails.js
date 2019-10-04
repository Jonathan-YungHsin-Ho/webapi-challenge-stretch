import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Action from './Action';

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
  }, [projects]);

  return (
    <div>
      <h2>Project: {project && project.name}</h2>
      {actions.map(action => (
        <Action key={action.id} action={action} />
      ))}
    </div>
  );
}
