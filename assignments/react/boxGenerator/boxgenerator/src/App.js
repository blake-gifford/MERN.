import Component from './components/component';
import DisplayComponent from './components/displayComponent';
import { useState } from 'react';


import './App.css';

function App() {

    const [boxs, setBoxs] = useState([]);
    const box= (color) => {
        let box = {
            color: color
        }
        setBoxs([...boxs, box])
    }
    return (
        <div className="App">
            <Component 
                onCreate={ box }
            />
            <DisplayComponent
            boxs = { boxs }
            />
        </div>
    );
}

export default App;