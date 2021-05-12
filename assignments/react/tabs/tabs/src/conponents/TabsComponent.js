import React, {useState} from 'react'

const TabsComponent = props => {
    const [tabClicked, setTabClicked] = useState(false);
    const content = [{
        tabName: 'Tab 1',
        content: 'Tab 1 Content is showing here.'
    },
    {
        tabName: 'Tab 2',
        content: 'Tab 2 Content is showing here.'
    },
    {
        tabName: 'Tab 3',
        content: ' Tab 3 Content is showing here.'
    }
    ];


    const tabHandler = e => {
        e.preventDefault();
        setTabClicked(true);
        console.log(e.target);
    }

    const clickHandler = tabMessage => {
        // props.clickHandler(clickedTabName);
        // const tabContent = content.filter(item => item.tabName === clickedTabName);
        // console.log(tabContent[0].content);
        props.message(tabMessage);
        
    }


    // const styleHandler = e => {
    //     if 
    // }

    

    return (
        <>
            <ul style={{ display: 'flex', textAlign: 'center'}}>
                {
                    content.map((tab, i) => <h2 style={{padding: '10px', outline: '1px solid black', textAlign: 'center'}} key={i} onClick={() => clickHandler(tab.content) }>{tab.tabName}</h2>)
                }
                {/* <li onClick={() => clickHandler(content.content) }>Tab 1</li> */}
                {/* <li onClick={() => clickHandler('Tab 2') }>Tab 2</li>
                <li onClick={() => clickHandler('Tab 3') }>Tab 3</li> */}
            </ul>
        </>
    )
}

export default TabsComponent


// style={{backgroundColor: 'black', color: 'white'}}