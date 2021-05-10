import React, { useState } from 'react'

const SomeForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState[""];
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState[""];
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState[""];
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [passwordError, setPasswordError] = useState[""];
    const [confirmPasswordError, setConfirmPasswordError] = useState[""];
    

    const submitHandler = e => {
        e.preventDefault();
        setFormSubmitted(true);
    }

    const handleFirstName = e => {
        setFirstNameError(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First Name Required");
        }
    }

    const handleLastName = e => {
        setLastNameError(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last Name Required");
        }
    }

    const handleEmail = e => {
        setEmailError(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email Required");
        }
    }

    const handlePassword = e => {
        setPasswordError(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password Required");
        }
    }

    const handleConfirmPassword = e => {
        setConfirmPasswordError(e.target.value);
        if(e.target.value.length < 1){
            setConfirmPasswordError("Confirm Password Required");
        }
    }

    return (
        <>
            {
                formSubmitted ?
                <h2>Thank you for your submission { firstName } { lastName }</h2>
                :
                <>
                <form onSubmit={ submitHandler }>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" name="firstName" onChange={ e => setFirstName(e.target.value) } />
                        {
                            firstNameError ?
                            <p style={{color:'red'}}> { handleFirstName }</p> 
                            :
                            ''
                        }
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" name="lastName" onChange={ e => setLastName(e.target.value) } />
                        {
                            lastNameError ?
                            <p style={{color:'red'}}> { handleLastName }</p> 
                            :
                            ''
                        }
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" onChange={ e => setEmail(e.target.value) } />
                        {
                            emailError ?
                            <p style={{color:'red'}}> { handleEmail }</p> 
                            :
                            ''
                        }
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" />
                        {
                            passwordError ?
                            <p style={{color:'red'}}> { handlePassword }</p> 
                            :
                            ''
                        }
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password: </label>
                        <input type="password" name="confirmPassword" />
                        {
                            confirmPasswordError ?
                            <p style={{color:'red'}}> { handleConfirmPassword }</p> 
                            :
                            ''
                        }
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <h2>Your Form Data</h2>
                <p> 
                    First Name: { firstName }
                </p>
                <p> 
                    Last Name: { lastName }
                </p>
                <p> 
                    Email: { email }
                </p>
                <p> 
                    Password: Password
                </p>
                <p> 
                    Confirm Password: Password
                </p>
                </>
            }
        </>
    )
}

export default SomeForm;
