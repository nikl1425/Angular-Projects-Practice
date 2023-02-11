import { PokemonDetails } from "./pokedex";



class PokeConverter {
    constructor(){}

    PokeApiToPokemon(response: any): PokemonDetails{
        return {
            abilities: response.abilities,
            name: response.name,
            sprites: response.sprites,
        }
    }


}


export default PokeConverter;