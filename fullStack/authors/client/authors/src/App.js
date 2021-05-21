import Header from './components/Header'
import './App.css';
import { Router } from '@reach/router';
import AllAuthors from './views/AllAuthors';
import EditAuthor from './views/EditAuthor';
import CreateAuthor from './views/CreateAuthor';
import OneAuthor from './views/OneAuthor';


function App() {
  return (
    <div className="App">
        <Header />
      <Router>
        <AllAuthors path="/"/>
        <EditAuthor path="/author/:id/update"/>
        <CreateAuthor path="/author/new"/>
        <OneAuthor path="/author/:id" />
      </Router>
    </div>
  );
}

export default App;
