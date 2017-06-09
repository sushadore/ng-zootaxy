import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'root-app',
  template: `
  <div class="container">
    <h1 id="header">Portland Zootaxy</h1>
    <div class="row">
      <div class="col-xs-8 col-xs-offset-2">
        <animal-list [animalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
        <new-animal  (newAnimalSender)="addAnimal($event)"></new-animal>
        <animal-detail></animal-detail>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList :Animal[] = [
    new Animal('Zebra', 'BnW', 4, 'male', 'herbivorous', 'withers scratches', 'baby zebras', 'Serengeti Sorrow', 6),
    new Animal('Zebra', 'Stripey', 2, 'female', 'herbivorous', 'sugar cubes', 'BnW', 'Serengeti Sorrow', 6),
    new Animal('Python', 'Slithery', 8, 'female', 'carnivorous', 'sun bathing', 'dead rats', 'Tropic Tedium', 4),
    new Animal('Polar Bear', 'Whitey', 2, 'male', 'carniovrous', 'balls', 'small children', 'Arctic Agony', 7),
  ];

  selectedAnimal: Animal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimal: Animal) {
    this.masterAnimalList.push(newAnimal)
  }
}
