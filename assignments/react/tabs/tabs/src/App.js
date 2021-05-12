import TabsComponent from './conponents/TabsComponent';
import DisplayComponent from './conponents/DisplayComponent';
import './App.css';
import { useState } from 'react';

function App () {

  const [content, setContent] = useState('Default Value');
  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <TabsComponent 
        clickHandler = { setContent } 
        message = { setMessage }
      />
      <DisplayComponent 
        content = { message }
      />
    </div>
  );
}

export default App;
