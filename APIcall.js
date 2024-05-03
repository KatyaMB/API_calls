 // Empty array
let pokemon = [];

// Fetch Pokemon with APIs
fetch("https://pokeapi.co/api/v2/pokemon/magmar/")
  .then((res) => res.json())
  .then((result) => {
    // Fetch name, weight, and abilities from the API response
    const { name, weight, abilities } = result;

    // Object containing name, weight, and abilities
    const pokemonData = {
      name: name,
      weight: weight,
      abilities: abilities.map((ability) => ability.ability.name),
    };

    // Push the pokemonData object to the pokemon array
    pokemon.push(pokemonData);

    // Output the data in a structured way
    console.log(`
      Name: ${pokemonData.name},
      Weight: ${pokemonData.weight},
      Abilities: ${pokemonData.abilities.join(", ")}
    `);
  })
  .catch((error) => {
    //Catch block to catch any errors
    console.log(`Sorry, your Pokemon is still recharging, try again later`);
  });