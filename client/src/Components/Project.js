import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styled-components';

export default function Project({ project }) {
  console.log(project);

  const handleDelete = () => {};

  return (
    <ProjectWrapper>
      <Link to={`/projects/${project.id}`}>
        <h3>{project.name}</h3>
      </Link>
      <p>{project.description}</p>
      <ButtonsWrapper>
        <Button>Edit</Button>
        <Button onClick={() => handleDelete(project.id)}>Delete</Button>
      </ButtonsWrapper>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  width: 100%
  border: 1px solid black;  
  padding: 1rem 0;

  a {
    font-size: 1.5rem;
    margin: 2rem auto;
    display: inline-block;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
