import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, navigate } from '@reach/router';


const Item = props => {
    const [id, setId] = useState(0);
    const [searchType, setSearchType] = useState("");
    // const [selectValue, setSelectValue] = props;

    const submitHandler = e => {
        e.preventDefault();
        navigate(`/${searchType}/${id}`)
    }

    const searchTypeHandler = e => {
        setSearchType(e.target.value)
        console.log(e)
    }

    const idHandler = e => {
        setId(e.target.value)
    }


    

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <label>Search for: </label>
                <select name="searchtype" onChange={ searchTypeHandler }>
                    <option value="chooseone" disabled>Select One</option>
                    <option value="people" >People</option>
                    <option value="planets" >Planets</option>
                </select>
                <label >ID:</label>
                <input type="number" name="id" onChange={ idHandler }/>
                <button>Search!</button>
            </form>
        </div>
    )
}

export default Item
