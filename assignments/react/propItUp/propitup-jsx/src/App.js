
import './App.css';

// import MyComponent from './components/myComponent';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className='App'>
      <PersonCard />,
      {/* <MyComponent 
        firstName={"Jane"} 
        lastName={"Doe"} 
        age={45} 
        hairColor={"Black"}
      />
      <MyComponent 
        firstName={"John"} 
        lastName={"Smith"} 
        age={88} 
        hairColor={"Brown"} 
      />
      <MyComponent 
        firstName={"Millard"} 
        lastName={"Fillmore"} 
        age={50} 
        hairColor={"Brown"} 
      />
      <MyComponent 
        firstName={"Maria"} 
        lastName={"Smith"} 
        age={62} 
        hairColor={"Brown"} 
      /> */}
    </div>
  );
}

export default App;
