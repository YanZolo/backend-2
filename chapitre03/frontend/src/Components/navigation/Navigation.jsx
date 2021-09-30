import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <div className="brand">Simple form</div>
            <NavLink className='link' exact to='/students/add' activeClassName='active-link' >Home</NavLink>
            <NavLink className='link' exact to='/' activeClassName='active-link' >Formulaire</NavLink>
            
        </nav>
    )
}

export default Navigation
