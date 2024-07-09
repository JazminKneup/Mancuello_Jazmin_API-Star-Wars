import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Results = ({ name, by, height, hair, world }) => {
  const [homeworldName, setHomeworldName] = useState('');
  const [homeworldId, setHomeworldId] = useState(null);

  useEffect(() => {
    if (world) {
      axios.get(world)
        .then(response => {
          setHomeworldName(response.data.name);
          const homeworldUrlParts = world.split('/');
          setHomeworldId(homeworldUrlParts[homeworldUrlParts.length - 2]);
        })
        .catch(err => console.error(err));
    }
  }, [world]);

  return (
    <div>
      <h2>{name}</h2>
      {height && <p>Height: {height}</p>}
      {hair && <p>Hair Color: {hair}</p>}
      {by && <p>Birth Year: {by}</p>}
      {homeworldName && (
        <p>Homeworld: <Link to={`/planets/${homeworldId}`}>{homeworldName}</Link></p>
      )}
    </div>
  );
};

export default Results;


