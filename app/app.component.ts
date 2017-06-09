import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'root-app',
  template: `
  <div class="container">
    <h1> Zootaxy: </h1>
    <ul>
      <li *ngFor="let animal of masterAnimalList"><h3>{{animal.name}} the {{animal.species}}</h3></li>
    </ul>
    <animal-list></animal-list>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

  </div>
  `
})

export class AppComponent {
  masterAnimalList :Animal[] = [
    new Animal('Zebra', 'BnW', 4, 'M', 'Herbivore', 'withers scratches', 'baby zebras', 'Serengeti Sorrow', 6),
    new Animal('Zebra', 'Stripey', 2, 'F', 'Herbivore', 'sugar cubes', 'BnW', 'Serengeti Sorrow', 6),
    new Animal('Python', 'Slithery', 8, 'F', 'Carnivore', 'sun bathing', 'dead rats', 'Joyless Jungle', 4),
    new Animal('Polar Bear', 'Whitey', 2, 'M', 'Carniovre', 'balls', 'small children', 'Anemic Arctic', 7),
  ];

  addAnimal(newAnimal: Animal) {
    this.masterAnimalList.push(newAnimal)
  }
}
