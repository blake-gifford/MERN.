import React from 'react'
import { Router } from '@reach/router';

const AnotherComponent = props => {
    const { word } = props;

    let context = (
        
        <p>the word is { word }</p>
    )

    return (
        <div>
            { context }
        </div>
    )
}

export default AnotherComponent
