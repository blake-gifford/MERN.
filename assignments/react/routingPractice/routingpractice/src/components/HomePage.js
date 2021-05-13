import React from 'react'
import { Router } from '@reach/router';


const HomePage = props => {
    const { id } = props;

    let context = (
        <p>the number is {id}</p>
    )


    return (
        <div>
            {context}
        </div>
    )
}

export default HomePage
