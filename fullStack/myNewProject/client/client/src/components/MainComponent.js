
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import PersonForm from './PersonForm';



const MainComponent = () => {
    // const [ message, setMessage] = useState('Loading...');

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api')
    //         .then(response => {
    //             setMessage(response.data.message)
    //         })
    // }, [])



    return (
        <div>
            <PersonForm />
        </div>
    )
}

export default MainComponent

