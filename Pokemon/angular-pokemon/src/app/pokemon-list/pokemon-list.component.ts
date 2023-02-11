import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import ConfigurationProvider from '../util/configurationProvider';
import { Pokemon, PokemonDetails } from '../util/pokedex';
import PokeConverter from '../util/converter';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemonList: PokemonDetails[] = [];
  private PokeConverter = new PokeConverter();

  constructor(private pokeService: PokedexService) { }



  ngOnInit(): void {
    this.GetListData();
  }


  GetListData(): void {
    const config = ConfigurationProvider.GetPokeListConfig;
    this.pokeService.GetPokemonList(config).subscribe(data => {
      data.results.forEach(pokemon => {
        this.pokeService.GetPokemon(pokemon.url).subscribe(details => {
          const pokeObj = this.PokeConverter.PokeApiToPokemon(details);
          this.pokemonList.push(pokeObj)
        })
      })
    });
  }
}
