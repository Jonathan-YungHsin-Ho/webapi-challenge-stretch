import React from 'react';
import styled from 'styled-components';

import Project from './Project';

export default function ProjectList({ projects }) {
  return (
    <div>
      <ListHeader>Project List:</ListHeader>
      <ListWrapper>
        {projects &&
          projects.map(project => (
            <div key={project.id}>
              <Project project={project} />
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
    padding: 2rem 0;
    width: 100%;
    border: 1px solid black;
  }
`;
