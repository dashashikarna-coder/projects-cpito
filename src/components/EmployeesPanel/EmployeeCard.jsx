import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { ProjectChip } from './ProjectChip';
import './EmployeeCard.css'; // добавим отдельный CSS для этого компонента

export function EmployeeCard({ employee, assignedProjects, onRemoveAssignment }) {
  const { setNodeRef, isOver } = useDroppable({
    id: employee.id,
    data: { employeeId: employee.id }
  });

  return (
    <div
      ref={setNodeRef}
      className={`employee-card ${isOver ? 'drag-over' : ''}`}
    >
      <h4>{employee.name}</h4>
      <div className="projects-list">
        {assignedProjects.map(project => (
          <ProjectChip
            key={project.id}
            project={project}
            employeeId={employee.id}
            onRemove={onRemoveAssignment}
          />
        ))}
        {assignedProjects.length === 0 && (
          <span className="empty-projects">Нет проектов</span>
        )}
      </div>
    </div>
  );
}