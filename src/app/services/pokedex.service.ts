import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private HttpClient: HttpClient) {}

  getPokemon(id: number) {
    return this.HttpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getAllPokemon() {
    return this.HttpClient.get('https://pokeapi.co/api/v2/pokemon');
  }
}
