import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';


const initialAuthor = {
    name: '',
    quote: []
}

const initialErrors = {
    name: ''
}


const OneAuthor = props => {
    const { id } = props;
    const [author, setAuthor] = useState({
        name: "",
        quote: []
    });
    const [errors, setErrors] = useState(initialErrors);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(response => {
            setAuthor(response.data.results)
            console.log(response.data.results)
            console.log(id)
        })
            .catch(err => navigate('/'));

    }, [])

    return (
        <div className = "App">
            <button onClick = { () => navigate(`/author/${id}`)}> Add a Quote!</button>
            <h2>Quotes by: {author.name} </h2>
            <p><DeleteButton /></p>
            <table>
                    <thead>
                        <tr>
                            <th>Quote</th>
                            <th>Votes</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        author.quote.map((quote, i)=>
                        <tr key={i}>
                                    <td>{quote.quote}</td>
                                    <td>{quote.votes}</td>
                                </tr>
                        )
                    }
                    </tbody>
            </table>
        </div>
    )
}

export default OneAuthor