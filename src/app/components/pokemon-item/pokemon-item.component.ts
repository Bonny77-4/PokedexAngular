import { Component } from "@angular/core";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html'
})
export class PokemonItemComponent {
  name = 'Pikachu';
  level = 1;

  getHp() {
    return 100;
  }
}
