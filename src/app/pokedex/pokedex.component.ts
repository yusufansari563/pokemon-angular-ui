import { Component, OnInit } from '@angular/core';
import { PokedexService } from './../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public AllPokemon:any;
  constructor(private PokedexService: PokedexService) { }

  ngOnInit(): void {
    this.PokedexService.getAllPokemon().subscribe((data:any) => {
      this.AllPokemon = data.results;
    });
  }
}


