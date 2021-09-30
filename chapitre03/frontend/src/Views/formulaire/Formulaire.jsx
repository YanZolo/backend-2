import React, { useState } from 'react';
import './Formulaire.css'

const Formulaire = () => {
    const [student, setStudent] = useState('')
    const [studentsList, setStudentsList] = useState([])

    const handleSubmit = () => {
        setStudentsList([...studentsList, student]);        
        console.log('student :>> ', student);
        console.log('studentsList :>> ', studentsList);
    }
    return (
        <>
            <div className='container-principal'>
                <div className='wrapper-list'>
                    <h1>Students list</h1>
                    <ul>
                        {studentsList?.map(student => (
                            <li>{student}</li>
                        ))}
                    </ul>

                </div>
<div className='separation'></div>
                <div className='wrapper-form'>
                    <h1>Add students</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <label htmlFor="Student name">Student name 
                            <input id="Student name" className='input-form' type="text" name='student' onChange={(event)=>setStudent(event)}/>
                        </label><br />
                        <button className='btn-form' type='submit'>Add student</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Formulaire
