import React, { useState } from 'react'

const SomeForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // const [inputs, setInputs] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    // });
    

    const submitHandler = e => {
        e.preventDefault();
        setFormSubmitted(true);
    }

    const handleFirstName = e => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First Name Required");
        }else{
            setFirstNameError("")
        }

    }

    const handleLastName = e => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last Name Required");
        }else{
            setFirstNameError("")
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        if(e.target.value.length < 2){
            setEmailError("Email Required");
        }else{
            setFirstNameError("")
        }
    }

    const handlePassword = e => {
        // setPassword(e.target.value);
        if(e.target.value.length < 5){
            setPasswordError("Password Required");
        }else{
            setFirstNameError("")
        }
    }

    const handleConfirmPassword = e => {
        // setConfirmPassword(e.target.value);
        if(e.target.value.length < 5){
            setConfirmPasswordError("Confirm Password Required");
        }else{
            setFirstNameError("")
        }
    }
    // const handleInput = e => {
    //     setInputs({
    //         ...inputs, 
    //         [e.target.name]: e.target.value,
    //     })
    // }
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
                        <input type="text" name="firstName" onChange={ handleFirstName } />
                        {
                            firstNameError ?
                            <p style={{color:'red'}}> { firstNameError }</p> 
                            :
                            ''
                        }
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" name="lastName" onChange={ handleLastName } />
                        {
                            lastNameError ?
                            <p style={{color:'red'}}> { lastNameError }</p> 
                            :
                            ''
                        }
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" onChange={ handleEmail } />
                        {
                            emailError ?
                            <p style={{color:'red'}}> { emailError }</p> 
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
