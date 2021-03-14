// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 150; i++) {
  const pokemon = document.createElement('img');
  pokemon.src = baseURL + `${i}.png`;
  container.appendChild(pokemon);
}
