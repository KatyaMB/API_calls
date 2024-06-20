// Make an empty array
const pokemon = [];

//Creating an async function
async function fetchPokemonData() {
  try {
    // Fetch the data from the API
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/magmar/");
    // Parse the JSON response
    const result = await response.json();

    // Fetch name, weight, and abilities from the API response
    const { name, weight, abilities } = result;

    // Object containing name, weight, and abilities
    const pokemonData = {
      name: name,
      weight: weight,
      abilities: abilities.map((ability) => ability.ability.name),
    };

    // Push the pokemonData object to the empty array
    pokemon.push(pokemonData);

    // Output the data in a structured way
    console.log(`
      Name: ${pokemonData.name},
      Weight: ${pokemonData.weight},
      Abilities: ${pokemonData.abilities.join(", ")}
    `);
  } catch (error) {
    // Catch block to catch any errors
    console.log(`Sorry, your Pokemon is still recharging, try again later`);
  }
}

// Call the async function
fetchPokemonData();
