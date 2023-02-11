import { PokeListReqConfig } from "./pokedex"


const GetPokeListConfig: PokeListReqConfig = {
    reqType: 'GET',
    cache: true,
    pageSize: 10,
    withCredentials: true,
    cache_control: 'max-age=604800'
}

const ConfigurationProvider = {
    GetPokeListConfig
}



export default ConfigurationProvider;