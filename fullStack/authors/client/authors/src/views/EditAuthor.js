import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';
import AuthorForm from '../components/AuthorForm';


const initialAuthor = {
    name: ''
}

const initialErrors = {
    name: ''
}

const EditAuthor = props => {
    const { id } = props;
    const [author, setAuthor] = useState( initialAuthor );
    const [errors, setErrors] = useState( initialErrors );

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response => setAuthor(response.data.results))
            .catch(err => navigate('/'));
    },[])

    const changeHandler = e => {
        const { name, value } = e.target;
        setAuthor({
            ...author,
            [name]:value
        })
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}/update`, author)
            .then(response => {
                const {message, results} = response.data;
                if(message === "success"){
                    navigate('/')
                }else{
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
            <h2>Edit Author</h2>
            <AuthorForm 
                author={author}
                errors={errors}
                submitHandler={submitHandler}
                changeHandler={changeHandler}
                action= "Update"
                DeleteButton={<DeleteButton id={id}/>}
            />
        </div>
    )
}

export default EditAuthor
