import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import axios from 'axios';

const AllAuthors = props => {
    const [author, setAuthor ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then(response => {
            setAuthor(response.data.results)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div className="App">
            <p><Link to='/new'>Add a quotable author</Link></p>
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
                                <td><Link to={`/author/${author._id}`}>{author.name}</Link></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors
