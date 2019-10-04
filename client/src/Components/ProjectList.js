import React from 'react';
import styled from 'styled-components';

import Project from './Project';
import AddProject from './AddProject';

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
        <AddProject />
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
    padding: 0 0 2rem 0;
    width: 100%;
  }
`;
