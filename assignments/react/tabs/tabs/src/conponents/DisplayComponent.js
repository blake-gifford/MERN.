import React from 'react'

const DisplayComponent = props => {
    const tabName = props.content;
    return (
        <div>
            <p> {tabName} </p>
        </div>
    )
}

export default DisplayComponent
