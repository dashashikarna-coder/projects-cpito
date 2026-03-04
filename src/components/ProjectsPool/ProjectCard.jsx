import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import './ProjectCard.css';

export function ProjectCard({ project }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: project.id,
    data: { projectId: project.id }
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 100 : 'auto'
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`project-card ${isDragging ? 'dragging' : ''}`}
    >
      {project.title}
    </div>
  );
}