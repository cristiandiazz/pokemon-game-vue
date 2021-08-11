const getPokemons = () => {
  const pokemonsList = Array.from(Array(650));

  return pokemonsList.map((arg, index) => index + 1);
};

const getPokemonsName = ([a, b, c, d] = []) => {
  console.log(a, b, c, d);
};

const getPokemonsOptions = () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  getPokemonsName(mixedPokemons.splice(0, 4));
  console.log(mixedPokemons);
};

export default getPokemonsOptions;
