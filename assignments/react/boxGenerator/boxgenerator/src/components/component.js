import React, { useState } from 'react'

const Component = props => {
    const [color, setColor] = useState("");


    const boxHandler = e => {
        e.preventDefault();
        props.onCreate(color);
    }

    const boxStyle = {
        background: { boxHandler },
        width: '50px',
        height: '50px'
    }



    return (
        <>
            <form onSubmit={ boxHandler }>
                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" name="color" onChange={ e => setColor(e.target.value) } value={ color }/>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </>
    )
}

export default Component
