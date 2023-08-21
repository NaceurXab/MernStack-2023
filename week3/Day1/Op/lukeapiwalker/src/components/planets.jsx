import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Planets = () => {
    const { id } = useParams();
    const [api, setApi] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setApi(response.data);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    }, [id]);

    if (!error) {
        return (
            <div>
                <h1>{api.name}</h1>
                <p>{api.climate}</p>
                <p>{api.terrain}</p>
                <p>{api.surface_water}</p>
                <p>{api.population}</p>
            </div>
        );
    } else {
        return(
            <img src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?w=800&quality=85" alt="error"/>
        )
    } 
};



export default Planets