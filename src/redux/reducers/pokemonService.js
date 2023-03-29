import axios from "axios"

const BASE_URL = "https://pokeapi.co/api/v2"

const getPokemons = async () => {
    const response = await axios.get(`${BASE_URL}/pokemon`)
    const results = response.data.results
    let pokeList = []
    for (let pokemon of results){
        const response = await axios.get(pokemon.url)
        pokeList = [...pokeList, response.data]
    }
    localStorage.setItem("pokeList", JSON.stringify(pokeList))
    return pokeList
}

const pokemonService = {
    getPokemons
}

export default pokemonService