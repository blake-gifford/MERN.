import Header from './components/Header'
import './App.css';
import { Router } from '@reach/router';
import AllAuthors from './views/AllAuthors';


function App() {
  return (
    <div className="App">
        <Header />
      <Router>
        <AllAuthors path="/"/>
      </Router>
    </div>
  );
}

export default App;
