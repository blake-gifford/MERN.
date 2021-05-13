import HomePage from './components/HomePage';
import { Router } from '@reach/router';

import './App.css';
import AnotherComponent from './components/AnotherComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Router>
        <HomePage path="/:id" />
        <AnotherComponent path="/${ word }" />
      </Router>

    </div>
  );
}

export default App;
