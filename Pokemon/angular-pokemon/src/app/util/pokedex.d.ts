export type PokeListReqConfig = {
    reqType: string,
    withCredentials: boolean,
    apiUrl?: string,
    pageSize: number,
    cache: boolean,
    cache_control: string
}


export type PokemonListObj = {
    name: string
    url: string
}

export type PokeList = {
    next: string,
    results: PokemonListObj[]
}