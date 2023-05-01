const pokemonList = document.getElementById('pokemonDetails')

const maxRecords = 1
const limit = 1
let offset = 0;

const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

window.onload = function() {
    console.log("Carregou");
    selectPokemon();
};

const selectPokemon = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${postId}`
    const res = await fetch(url)
    const pokemon = await res.json()
    convertPokemonToLi(pokemon)
    console.log(pokemon);
}

function convertPokemonToLi(pokemon) {

    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
 
    const photo = pokemon.sprites.other.dream_world.front_default
    const htmlString =
        `   <div class="pokemon ${pokemon.type}">
                <div class="button">
                    <a href="javascript:window.history.back();"><img src="/assets/image/left-arrow.png"/></a>
                    <img src="/assets/image/heart.png"/>
                </div>

                <div class="name">
                    <span class="name">${pokemon.name}</span>
                </div>
                <div class="number">
                    <span class="number">#${pokemon.id}</span>
                </div>            
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
                <div class="image">
                    <img src="${photo}" alt="${pokemon.name}">
                </div>
            </div>
        `
    pokemonList.innerHTML = htmlString + pokemonList.innerHTML
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

