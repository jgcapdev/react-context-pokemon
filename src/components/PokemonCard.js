const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <div className="card text-center bg-primary">
      {/* <img className="card-img-top" src={pokemon.sprites.front_default || ''} alt="Card image cap" /> */}
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Weight: {pokemon.weight}</li>
        <li className="list-group-item">Height: {pokemon.height}</li>
      </ul>
      {/* <ul className="list-group list-group-flush">
        {Object.keys(pokemon.abilities).map((ab) => (
          <li key={ab}>{ab.ability}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default PokemonCard;
