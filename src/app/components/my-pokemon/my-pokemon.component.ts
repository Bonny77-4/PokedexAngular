import { Component } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.scss'],
})
export class MyPokemonComponent {
  name: string;
  type: string;
  buttonDisabled: boolean = false;

  pokemonNames: string[] = ['Carapuce', 'Bulbizarre', 'Dracofeu'];
  pokemonTypes: string[] = ['eau', 'plante', 'feu'];

  changePokemon() {
    const randomIndex = Math.floor(Math.random() * this.pokemonNames.length);
    this.name = this.pokemonNames[randomIndex];
    const randomIndex2 = Math.floor(Math.random() * this.pokemonTypes.length);
    this.type = this.pokemonTypes[randomIndex2];
    this.buttonDisabled = true;
  }

  constructor() {
    const types = ['feu', 'eau', 'plante'];
    const randomIndex = Math.floor(Math.random() * types.length);
    this.type = types[randomIndex];
    const names = ['bulbizare', 'tortank', 'Mew'];
    const randomIndex2 = Math.floor(Math.random() * names.length);
    this.name = names[randomIndex2];
  }
}
