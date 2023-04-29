const pokemonList = document.getElementById('pokemonDetails')

const maxRecords = 1
const limit = 1
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `<div class="pokemon ${pokemon.type}">
                <div class="button">
                    <a href="javascript:window.history.back();"><img src="/assets/image/left-arrow.png"/></a>
                    <img src="/assets/image/heart.png"/>
                </div>

                <div class="name">
                    <span class="name">${pokemon.name}</span>
                </div>
                <div class="number">
                    <span class="number">#${pokemon.number}</span>
                </div>            
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
                <div class="image">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </div>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

