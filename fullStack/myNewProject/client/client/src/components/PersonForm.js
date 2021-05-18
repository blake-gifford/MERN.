import React, { useState } from 'react';

import axios from 'axios';


const PersonForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(res => console.log("Response: ", res))
        .catch(err => console.log("Error: ", err))
    }


    return (
        <form onSubmit={submitHandler}>
            <p>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={e => setLastName(e.target.value)}/>
            </p>
            <input type="submit" value="Submit"/>
        </form>
    )
}


export default PersonForm

