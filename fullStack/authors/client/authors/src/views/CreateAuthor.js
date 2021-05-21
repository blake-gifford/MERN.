import React, { useState } from 'react';
import TruckForm from '../components/AuthorForm';
import { navigate } from '@reach/router';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const initialAuthor = {
    name: ''
}

const initialErrors = {
    name: ''
}

const CreateAuthor = props => {
    const { id } = props;
    const [author, setAuthor] = useState( initialAuthor );
    const [errors, setErrors] = useState( initialErrors );

    const changeHandler = e => {
        const { name, value } = e.target;
        setAuthor({
            ...author,
            [name]:value
        })
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/author`, author)
            .then(response => {
                const {message, results} = response.data;
                if(message === "success"){
                    navigate('/')
                } else{
                    const newErrors = {...initialErrors};
                    for(const key in results.errors){
                        newErrors[key] = results.errors[key].message;
                    }
                    setErrors(newErrors);
                }
            })
    }

    return (
        <div>
            <AuthorForm 
                author={author}
                errors={errors}
                submitHandler={submitHandler}
                changeHandler={changeHandler}
                action="Submit"
            />
        </div>
    )
}

export default CreateAuthor
