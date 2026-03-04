import React from 'react';
import { EmployeeCard } from './EmployeeCard';

export function EmployeesPanel({ employees, assignments, projects, onRemoveAssignment }) {
  const getProjectsForEmployee = (employeeId) => {
    const assignedIds = assignments
      .filter(a => a.employeeId === employeeId)
      .map(a => a.projectId);
    return projects.filter(p => assignedIds.includes(p.id));
  };

  return (
    <div className="employees-panel">
      <h3>Сотрудники</h3>
      <div className="employees-list">
        {employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            assignedProjects={getProjectsForEmployee(employee.id)}
            onRemoveAssignment={onRemoveAssignment}
          />
        ))}
      </div>
    </div>
  );
}