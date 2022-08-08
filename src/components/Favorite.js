import React, { useContext } from 'react';
import PokemonsContext from '../context/PokemonsContext.js';

import Pokemon from './Pokemon.js';

import { Table } from 'react-bootstrap';

const Favorite = () => {
  const { pokemons } = useContext(PokemonsContext);

  return (
    <div>
      <h1 className="text-center">Favorites</h1>
      {pokemons.length === 0 ? (
        <h2 className="text-center">There are no pokemons at the moment</h2>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th>Pokemon</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <Pokemon pks={pokemons} setButton={false} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Favorite;
