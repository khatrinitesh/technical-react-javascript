import React, { useState } from 'react';
import Modal from './Modal';

const GridView = ({ students }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
  
    const handleEdit = () => {
      console.log('Edit', selectedStudent);
      setModalOpen(false);
    };
  
    const handleFlag = () => {
      console.log('Flag', selectedStudent);
      setModalOpen(false);
    };
  
    const handleDelete = () => {
      console.log('Delete', selectedStudent);
      setModalOpen(false);
    };
  
    return (
      <div>
        <div className="grid-container">
          {students.map(student => (
            <div key={student.id} className="grid-item">
              <h3>{student.name}</h3>
              <p>Age: {student.age}</p>
              <button onClick={() => { setSelectedStudent(student); setModalOpen(true); }}>
                Actions
              </button>
            </div>
          ))}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onEdit={handleEdit}
          onFlag={handleFlag}
          onDelete={handleDelete}
        />
      </div>
    );
  };

export default GridView;
