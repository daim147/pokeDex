const pokeContaineer = document.getElementById("poke-container")

const pokeCount = 150

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5f5f5',
    fighting:'#E6E0D4',
    normal: '#F5f5f5'


}
const mainType = Object.keys(colors)

const fetchPokemon = async ()=>{
    for(let i = 1; i<= pokeCount; i++){
      await getPokemon(i)
    }
}

const getPokemon = async (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}` 
    
    const res  = await fetch(url)
    const data = await res.json()
   createPoke(data)
}

const createPoke = (pokemon) =>{
    const pokemonEl = document.createElement("div")
    

    pokemonEl.classList.add("pokemon")
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const id  = pokemon.id.toString().padStart(3, 0)

    const poke_type = pokemon.types.map(types => types.type.name)

    const type = mainType.find(color => poke_type.indexOf(color) > -1)

    const color = colors[type]
    pokemonEl.style.background = color


    pokemonEl.innerHTML = `
            <div class="img-cotainer">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
            </div>
    
    `
    pokeContaineer.appendChild(pokemonEl)
}
 
fetchPokemon()