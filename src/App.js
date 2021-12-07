import Card from './components/Card';
import React, { useState } from 'react';

// Netlify website url https://friendly-lewin-3a2730.netlify.app/

function App() {

  const [pokemon, setPokemon] = useState([ "sylveon", "mamoswine", "blastoise", "blissey", "gardevoir", "pikachu", "charizard", "snorlax", "venusaur"]);

  return (
    <div className="App">
      <header className="App-header">

        {/* Pass array data to Card component, dynamically create component */}
        {pokemon.map((pokemon) => <Card key={pokemon} poke_img={pokemon}/>)}

      </header>
    </div>
  );
  
}

export default App;
