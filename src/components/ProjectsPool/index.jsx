import React from 'react';
import { ProjectCard } from './ProjectCard';

export function ProjectsPool({ projects }) {
  return (
    <div className="projects-pool">
      <h3>Все проекты</h3>
      <div className="projects-list">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}