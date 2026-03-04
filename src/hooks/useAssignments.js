import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, addDoc, deleteDoc, doc, query } from 'firebase/firestore';

export function useAssignments() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'assignments'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAssignments(data);
      setLoading(false);
    }, (error) => {
      console.error("Ошибка Firestore:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addAssignment = async (employeeId, projectId) => {
    const exists = assignments.some(a => a.employeeId === employeeId && a.projectId === projectId);
    if (exists) return;

    try {
      await addDoc(collection(db, 'assignments'), { employeeId, projectId });
    } catch (error) {
      console.error("Ошибка добавления:", error);
    }
  };

  const removeAssignment = async (employeeId, projectId) => {
    const toDelete = assignments.find(a => a.employeeId === employeeId && a.projectId === projectId);
    if (!toDelete) return;

    try {
      await deleteDoc(doc(db, 'assignments', toDelete.id));
    } catch (error) {
      console.error("Ошибка удаления:", error);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const projectId = active.data.current?.projectId;
    const targetEmployeeId = over.data.current?.employeeId;
    if (projectId && targetEmployeeId) {
      addAssignment(targetEmployeeId, projectId);
    }
  };

  return { assignments, addAssignment, removeAssignment, handleDragEnd, loading };
}