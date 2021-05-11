import React from 'react'

const DisplayComponent = props => {
    const boxs = props.boxs;
    return (
        <div>
            {boxs.map((item, i) => 
            <div key={i} style={{backgroundColor: item.color, width: '150px', height: '150px'}}>
                
            </div>
            )}
        </div>
    )
}

export default DisplayComponent
