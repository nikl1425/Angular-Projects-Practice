export type PokeListReqConfig = {
    reqType: string,
    withCredentials: boolean,
    apiUrl?: string,
    pageSize: number,
    cache: boolean,
    cache_control: string
}



export type ability = {
    name: string;
    url: string;
}

export type PokemonDetails = {
    name: string;
    abilities: ability[];
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny: string;
    }
}

export type Pokemon = {
    name: string;
    url: string;
}

export type PokeList = {
    next: string;
    results: Pokemon[];
}