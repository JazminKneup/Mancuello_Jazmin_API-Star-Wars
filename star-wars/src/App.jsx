import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Resultados from "./components/Results/Results";
import Error from "./components/Error/Error"; 
import axios from "axios"; 
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [resultados, setResultados] = useState({});
  const [error, setError] = useState(null); 

  const handleSearch = async (searchType, searchId) => {
    const maxId = searchType === 'people' ? 82 : 60;
    if (searchId < 1 || searchId > maxId) {
      setError(`Please enter a valid ID between 1 and ${maxId}`);
      setResultados({});
      return;
    }

    try {
      const response = await axios.get(`https://swapi.dev/api/${searchType}/${searchId}`);
      setResultados({ ...response.data, tipo: searchType });
      setError(null);
    } catch (err) {
      console.error(err);
      setError("These aren't the droids you're looking for.");
      setResultados({});
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar buscar={handleSearch} />
        {error ? (
          <Error />
        ) : (
          resultados.tipo && (
            <Resultados
              name={resultados.name || resultados.title}
              by={resultados.birth_year || resultados.climate || resultados.episode_id || resultados.classification || resultados.model}
              height={resultados.height || resultados.created || resultados.opening_crawl || resultados.designation || resultados.manufacturer}
              hair={resultados.hair_color || resultados.diameter || resultados.director || resultados.average_height || resultados.cost_in_credits}
              world={resultados.homeworld || resultados.population || resultados.producer || resultados.skin_colors || resultados.length}
            />
          )
        )}
      </div>
    </Router>
  );
}

export default App;