import React from 'react'

const Task = props => {
    const { task, index, list, setList } = props;
    
    const onClick = () => {
        setList(() => {return list.filter(task => list.indexOf(task) !== index)})
    }
    
    return (
        <>
            <h4> {task.name} </h4>
            <div>
                <label htmlFor="checkbox">Completed?</label>
                <input type="checkbox" name=""/>
                <button onClick = {onClick} >X</button>
            </div>
        </>
    )
}

export default Task


// setList(() => {return list.filter(task => list.indexOf(task) !== index)})