import { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import PokemonsContext from '../context/PokemonsContext.js';

const Pokemon = ({ pks, setButton = true }) => {
  const { pokemons, setPokemons } = useContext(PokemonsContext);

  const handleAddPokemon = (pokemon) => {
    setPokemons(pokemons.concat(pokemon));
  };

  const handleDeletePokemon = (pokemon) => {
    const filtered = pokemons.filter((poke) => pokemon.name !== poke.name);
    setPokemons(filtered);
  };

  return (
    <>
      {pks.map((pokemon) => {
        return (
          <tr key={pokemon.name}>
            <td className="text-center">{pokemon.name.toUpperCase()}</td>
            <td>
              <div className="text-center">
                {setButton ? (
                  <Button
                    onClick={() => {
                      handleAddPokemon(pokemon);
                    }}
                    type="button"
                    className="btn btn-primary mx-2"
                  >
                    Add to favorites
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleDeletePokemon(pokemon);
                    }}
                    type="button"
                    className="btn btn-danger mx-2"
                  >
                    Delete from favorites
                  </Button>
                )}
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Pokemon;
