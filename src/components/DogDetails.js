import React from "react";
import { Link, useParams } from 'react-router-dom';

function DogDetails({dogs}){
    let { name } = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name);
    
    return  (
        <div>
            <h2>{dog.name}</h2>
            <p>{dog.age} years old</p>
            <img src={dog.src} alt={dog.name} />
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails;