import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import './Formulaire.css';

const Formulaire = (props) => {
    const [student, setStudent] = useState('');
    const [studentList, setStudentList] = useState([]);
    const history = useHistory()
    
    
    const handleInputStudent = (newStudent) => {
        setStudent(newStudent);
    }

    const handleSubmit = (e) => {
        e.preventDefault()  
        console.log('student :>> ', student);

        setStudentList([...studentList, student])
        fetch('http://localhost:8080/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({student: student})
        }) 
        
        history.push('/students/add', student) 
    };
      
    return (
        <>
            <div className='container-view-form'>
                <div className='wrapper-list'>
                    <h1>Students list</h1>
                    <ul>
                        {studentList.map(student => (
                            <li>{student}</li>
                        ))}
                    </ul>
                </div>

                <div className='separation'></div>

                <div className='wrapper-form'>
                    <h1>Add students</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <label htmlFor="Student name">
                            Student name
                            <input id="Student name" className='input-form' type="text" name='student' value={student} autoComplete='off' onChange={(e) => handleInputStudent(e.target.value)} />
                        </label><br />
                        <button className='btn-form' type='submit'>Add student</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Formulaire;
