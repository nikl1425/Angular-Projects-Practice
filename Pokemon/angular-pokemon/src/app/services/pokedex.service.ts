import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, shareReplay } from 'rxjs/operators';
import { PokeListReqConfig, PokeList } from '../util/pokedex';



@Injectable({
  providedIn: 'root'
})


export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  private baseParams = new HttpParams;

  constructor(private http: HttpClient) {


  }


  GetBaseHeaders() {
    let baseHeaders = new HttpHeaders;
    baseHeaders.set('content-type', 'application/json');
    baseHeaders.set('accept-language', 'en-US,en;q=0.9');
    baseHeaders.set('access-control-allow-origin', '*');
    return baseHeaders;
  }


  GetPokemonList(config: PokeListReqConfig, params?: HttpParams): Observable<PokeList> {
    console.log(this.baseUrl)

    let uri: string = config.apiUrl ? this.baseUrl + config.apiUrl : this.baseUrl;

    return this.http.get<PokeList>(uri,
      {
        headers: this.GetBaseHeaders(),
        params
      }).pipe(map((response: any) => response),
      shareReplay(1)
      )
  }
}


