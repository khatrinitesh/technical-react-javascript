import React, { useState } from 'react';

const Crud = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', age: '', grade: '' });
    const [editIndex, setEditIndex] = useState(null);
    const [editStudent, setEditStudent] = useState({ name: '', age: '', grade: '' });
  
    // Add a new student
    const addStudent = () => {
      if (newStudent.name) {
        setStudents([...students, newStudent]);
        setNewStudent({ name: '', age: '', grade: '' });
      }
    };
  
    // Start editing a student
    const startEdit = (index) => {
      setEditIndex(index);
      setEditStudent(students[index]);
    };
  
    // Save the edited student
    const saveEdit = () => {
      const updatedStudents = students.map((student, index) =>
        index === editIndex ? editStudent : student
      );
      setStudents(updatedStudents);
      setEditIndex(null);
      setEditStudent({ name: '', age: '', grade: '' });
    };
  
    // Delete a student
    const deleteStudent = (index) => {
      setStudents(students.filter((_, i) => i !== index));
    };
  
  return (
    <>
      <div className="container">
      <h1>Student Management</h1>
      
      <div className="form">
        <input
          type="text"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="text"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
          placeholder="Age"
        />
        <input
          type="text"
          value={newStudent.grade}
          onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
          placeholder="Grade"
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div className="grid-container">
        {students.map((student, index) => (
          <div key={index} className="grid-item">
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editStudent.name}
                  onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
                />
                <input
                  type="text"
                  value={editStudent.age}
                  onChange={(e) => setEditStudent({ ...editStudent, age: e.target.value })}
                />
                <input
                  type="text"
                  value={editStudent.grade}
                  onChange={(e) => setEditStudent({ ...editStudent, grade: e.target.value })}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>Name: {student.name}</p>
                <p>Age: {student.age}</p>
                <p>Grade: {student.grade}</p>
                <button onClick={() => startEdit(index)}>Edit</button>
                <button onClick={() => deleteStudent(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Crud;
