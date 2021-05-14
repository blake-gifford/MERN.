import Item from './components/Item';
import Display from './components/Display';
import { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';


function App() {
  const [id, setId] = useState("")
  return (
    <div className="App">
      <Item />
      <Router>
        <Display path="/:searchType/:id"/>
      </Router>
    </div>
  );
}

export default App;
