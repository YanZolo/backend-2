import React from 'react'

const Home = (props) => {

    return (
        <div>
            <h1>Added student</h1>
            <p>Student <b>[{props.history.location.state}]</b> has been added</p>
            <a href="http://localhost:3000/">goBack</a>
        </div>
    )
}

export default Home
