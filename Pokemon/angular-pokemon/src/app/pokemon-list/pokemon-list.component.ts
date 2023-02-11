import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import ConfigurationProvider from '../util/configurationProvider';
import { PokemonListObj } from '../util/pokedex';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemonList: PokemonListObj[] = [];


  constructor(private pokeService : PokedexService) {}
  


  ngOnInit(): void {
    this.GetListData();
  }


  GetListData(): void {
    const config = ConfigurationProvider.GetPokeListConfig;
    console.log(config)
    this.pokeService.GetPokemonList(config).subscribe(data => {
      this.pokemonList = data.results
    });
  }



}
