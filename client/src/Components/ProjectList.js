import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectList({ projects }) {
  return (
    <div>
      <h2>Project List</h2>
      {projects &&
        projects.map(project => (
          <div key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <p>{project.name}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}
