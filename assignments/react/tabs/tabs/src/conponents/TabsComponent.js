import React, {useState} from 'react'

const TabsComponent = props => {
    const [tabClicked, setTabClicked] = useState(false);


    const tabHandler = e => {
        e.preventDefault();
        setTabClicked(true);
    }

    
    return (
        <>
            <form onSubmit={ tabHandler }>
                <input type="submit" value="Tab 1" style={{backgroundColor: 'black', color: 'white'}}
                />
                <input type="submit" value="Tab 2"/>
                <input type="submit" value="Tab 3"/>
            </form>
        </>
    )
}

export default TabsComponent
