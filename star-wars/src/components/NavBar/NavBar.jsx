import React, { useState } from 'react';
import './NavBar.css';

const NavBar = (props) => {
  const [value, setValue] = useState('');
  const [id, setId] = useState(null);

  const handleChange = (e) => {
    const valor = e.target.value;
    setValue(valor);
  };

  const handleChange2 = (e) => {
    const valor = e.target.value;
    setId(valor);
  };

  const handleClick = () => {
    if (!isNaN(Number(id))) {
      props.buscar(value, id);
    } else {
      alert('Ingrese un numero!!!');
    }
  };

  return (
    <div className="container">
      <label htmlFor="select">Search for: </label>
      <select name="select" id="select" value={value} onChange={handleChange}>
        <option value="">Selecciona una opcion</option>
        <option value="people">People</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="species">Species</option>
        <option value="planets">Planets</option>
        <option value="films">Films</option>
      </select>
      <input type="text" placeholder='ID:' onChange={handleChange2} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default NavBar;
