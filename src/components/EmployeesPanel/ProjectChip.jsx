import React from 'react';

export function ProjectChip({ project, employeeId, onRemove }) {
  return (
    <span className="project-chip">
      {project.title}
      <button
        onClick={() => onRemove(employeeId, project.id)}
        className="remove-btn"
        title="Удалить проект"
      >
        ×
      </button>
    </span>
  );
}