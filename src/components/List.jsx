import React, { useState } from 'react';
import Modal from './Modal';

const ListView = ({ students }) => {
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

    return(
   <>
    <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - Age: {student.age}
            <button className='bg-black text-white px-2 py-2 rounded-[10px]' onClick={() => { setSelectedStudent(student); setModalOpen(true); }}>
              Actions
            </button>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onEdit={handleEdit}
        onFlag={handleFlag}
        onDelete={handleDelete}
      />
   </>
    )
}

export default ListView;
