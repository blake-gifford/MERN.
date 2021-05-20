import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const DeleteButton = props => {
    const { id } = props;
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${id}/delete`)
            .then(response => navigate('/'))
            .catch(err => navigate('/'))
    }
    return (
        <div>
            <input type="button" value="Delete" onClick={ deleteHandler }/>
        </div>
    )
}

export default DeleteButton
