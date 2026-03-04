import React from 'react';
import { DndContext } from '@dnd-kit/core';
import { EmployeesPanel } from './components/EmployeesPanel';
import { ProjectsPool } from './components/ProjectsPool';
import { employees, projects } from './data';
import { useAssignments } from './hooks/useAssignments';
import './App.css';

function App() {
  const { assignments, removeAssignment, handleDragEnd, loading } = useAssignments();

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="app-container">
        <EmployeesPanel
          employees={employees}
          assignments={assignments}
          projects={projects}
          onRemoveAssignment={removeAssignment}
        />
        <ProjectsPool projects={projects} />
      </div>
    </DndContext>
  );
}

export default App;