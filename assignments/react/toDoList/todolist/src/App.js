import Input from './components/Input';
import Task from './components/Task';
import { useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>To Do's</h1>
      <hr/>
      {list.map((task, i) => (
        <Task task={ task } setList = { setList } index = { i } list = { list }/>
      ))}
      <hr/>
      <Input 
        list={list} setList={setList}
      />
    </div>
  );
}

export default App;
