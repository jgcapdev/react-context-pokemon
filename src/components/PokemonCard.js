const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <div className="card text-center">
      {/* <img className="card-img-top" src={pokemon.sprites.front_default || ''} alt="Card image cap" /> */}
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
      </div>
      {/* <ul className="list-group list-group-flush">
        {Object.keys(pokemon.abilities).map((ab) => (
          <li key={ab}>{ab.ability}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default PokemonCard;
