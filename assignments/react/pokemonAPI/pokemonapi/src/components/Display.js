import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Display = props => {
    const [pokemon, setPokemon] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        axiosPokemon();
    }, [refresh])

    const axiosPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(response => setPokemon(response.data.results))
        .catch(err => console.log(err));
    }

    // const refreshData = () => {
    //     setPokemon();
    //     setRefresh(refresh+1);
    // }

    // let context = () => {
    //     pokemon.length === 0 ?
    //     <p>Please wait... Retreiving data!</p>
    //     :
    //     <>
    //     <h2>Pokemon Name</h2>
    //     <ul>
    //         {
    //         pokemon.map( (poke, i) => (
    //         <li key={i}> {poke.name}</li>
    //         ))
    //         }
    //     </ul>
    //     </>
    // }

    return (
        <div>
            {/* {context} */}
            <h2>Pokemon Name</h2>
            {
            pokemon.map( (poke, i) => (
            <li key={i}> {poke.name}</li>
            ))
            }
        </div>
    )
}

export default Display
