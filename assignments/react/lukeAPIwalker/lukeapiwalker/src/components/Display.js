import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router';
import axios from 'axios';

const Display = props => {
    const { id, searchType } = props;
    const [ people, setPeople] = useState({
        name: "",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: ""
    })
    const [ planet, setPlanet] = useState({
        name: "",
        climate: "",
        terrain: "",
        surface_water: "",
        population: ""
    })

    useEffect(() =>{
        axiosPeople(id, searchType);
    },[id])

    const axiosPeople = (id, searchType) => {
        axios.get(`https://swapi.dev/api/${searchType}/${id}/`)
            .then(response => {
                searchType == "people" ?
                setPeople(response.data)
                :
                setPlanet(response.data)
            })
        .catch(err => console.log(err))
    }

    

    return (
        
        <>
            {
                    
                searchType == "people" ?
                <>
                    <h2>{ people.name }</h2>
                    <h4>Height: { people.height }</h4>
                    <h4>Mass: { people.mass }</h4>
                    <h4>Hair Color: {people.hair_color }</h4>
                    <h4>Skin Color: { people.skin_color }</h4> 
                </>
                :
                <>
                    <h2>{planet.name} </h2>
                    <h4>{planet.climate}</h4>
                    <h4>{planet.terrain}</h4>
                    <h4>{planet.surface_water}</h4>
                    <h4>{planet.population}</h4>
                </>
            }
        </>
        
    )
}

export default Display
