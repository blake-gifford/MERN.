import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios';

const AllAuthors = props => {
    const { id } = props;
    const [author, setAuthor ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then(response => {
            setAuthor(response.data.results)
            console.log(response.data.results)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div className="App">
            <p><Link to='/author/new'>Add a quotable author</Link></p>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions available</th>
                </thead>
                <tbody>
                {
                    author.map((author, i) => 
                        <tr key={i}>
                                <td>{author.name}</td>
                                <button className="btn btn-primary" onClick={() => navigate(`/author/${author._id}`)}>View Quotes</button>
                                <button className="btn btn-secondary" onClick={() => navigate(`/author/${author._id}/update`)}>Edit</button>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors
