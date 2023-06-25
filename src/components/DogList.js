import React from "react";
import { Link } from 'react-router-dom';


function DogList({dogs}) {
    return (
        <div>
            <h1>Meet our dogs!</h1>
            <div>
                {dogs.map(dog => (
                    <div key={dog.name}>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                            <h2>{dog.name}</h2>
                            <p>Age: {dog.age}</p>
                            <img src={dog.src} alt={dog.name} />
                        </Link>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;