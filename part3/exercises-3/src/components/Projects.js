import data from './../data.json';
import { useState } from 'react';

export default function MyProjects () {
    const [index, setIndex] = useState(0);
    const plants = [...new Set(data)];

    function handleClick() {
        if (index < data.length-1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }

        return <>{plants[index]}</>;
    }

    return (
        <>
        <button onClick={handleClick}>Next</button>
        <p>{`Plant Name: ${plants[index].name}`}</p>
        <p>{`Sunlight Hours: ${plants[index].sunlightHours} hours`}</p>
        <p>{`Average Height: ${plants[index].averageHeight}`}</p>
        <img src={plants[index].imageURL} alt={plants[index].name}></img>
        </>
    
    );
}