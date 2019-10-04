import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ProjectList({ projects }) {
  return (
    <div>
      <ListHeader>Project List:</ListHeader>
      <ListWrapper>
        {projects &&
          projects.map(project => (
            <div key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <p>{project.name}</p>
              </Link>
            </div>
          ))}
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

  p {
    font-size: 1.5rem;
    margin: 2rem;
  }
`;
