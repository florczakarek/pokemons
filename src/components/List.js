import Pokemon from './Pokemon';

const Pokemons = ({ pokemons }) => {
  return (
    <div className='container'>
      <div className='list'>
        {pokemons.map((pokemon) => {
          return (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
              sprites={pokemon.sprites.other.dream_world.front_default}
              weight={pokemon.weight}
              height={pokemon.height}
            ></Pokemon>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
