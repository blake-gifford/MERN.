import React from 'react';


const PersonCard = props => {

    const { firstName: fName, lastName: lName, age: age, hairColor: hair} = props;

    return(
        <div>
            <h1>{ lName }, { fName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { hair }</p>
        </div>
    );
}
export default PersonCard;
