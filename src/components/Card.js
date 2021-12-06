import ReactCardFlip from 'react-card-flip';
import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from 'axios'


const Card = ({poke_img}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [pokemonSprite, setPokemonSprite] = useState();
    const [pokemonName, setPokemonName] = useState();
    const [pokemonMoves, setPokemonMoves] = useState([]);
    
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }


    useEffect(() => {
      getPokemon();
    }, [])

    //Get Pokemon data from pokeapi; save data into Sprite, Name, Moves state
    const getPokemon = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/'+ poke_img)
        .then(response => {
        setPokemonSprite(response.data.sprites.front_default);
        setPokemonName(response.data.name)
        //loop to save pokemon moves into array 
        for(let i = 0; i < 4; i++){
          console.log('pokemonMoves' + i + ':' + response.data.moves[i].move.name)
          setPokemonMoves(prevArray => [...prevArray, response.data.moves[i].move.name])
        }
      })
    }



    return (

       <ReactCardFlip containerClassName='card-container-css' isFlipped={isFlipped} flipDirection="vertical">
          <div className="card-inner-css">
            <p className="card-title-css">{pokemonName}</p>
            <img className='img' src={pokemonSprite} alt="venusaur" />
            <button onClick={handleClick}>Click to flip back</button>
          </div>

          <div className="card-inner-css">
          <p className="card-title-css">{pokemonName} moves</p>
            {pokemonMoves.map((pokemonMoves) => <p key={pokemonMoves}> {pokemonMoves} </p> )}
            <button onClick={handleClick}>Click to flip front</button>
          </div>
        </ReactCardFlip>

    )
}

export default Card