import React from 'react';
// import './PersonCard.css';

const CARDS = [
  {last_name: "Doe", first_name: "Jane", age: 45, hair_color: "black"},
  {last_name: "Smith", first_name: "John", age: 88, hair_color: "brown"},
  {last_name: "Fillmore", first_name: "Millard", age: 50, hair_color: "brown"},
  {last_name: "Smith", first_name: "Maria", age: 62, hair_color: "brown"}
];

class Card extends React.Component {
  // increment = () => {
  //   this.setState({
  //     age: this.state.age+1,
  //   });
  // };
  // decrement = () => {
  //   this.setState({
  //     age: this.state.age-1,
  //   });
  // };

  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    };
    console.log(this);
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  increment(id, e) {
    console.log(`id: ${id}`, e);
    this.setState({
      age: this.state.age+1,
    });
  }
  decrement(id, e) {
    console.log(`id: ${id}`, e);
    this.setState( state => ({age: state.age-1}) );
  }
  test(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <h3> {this.props.last_name} {this.props.first_name}</h3>
        <p> Age: {this.state.age} </p>
        <p> Hair Color: {this.props.hair_color} </p>
        <button onClick={ this.increment.bind(this, this.props.id) }>Birthday Button for {this.props.first_name} {this.props.last_name}</button>
        <button onClick={ (e) => this.decrement(this.props.id, e) }>Decrease the age</button>
        <button onClick={ (e) => this.test(e) }>Show Event</button>
      </div>
    );
  }
}

export default class PersonCard extends React.Component {
  
  render() {
    return (
      <div className="person-card">
        { CARDS.map( (person, index) => <Card key={index} id={index} {...person} />) }
      </div>
    );
  }
}

