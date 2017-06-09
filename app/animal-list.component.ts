import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select class="form-control" (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals">Mature Animals</option>
  </select>
  <ul>
  <li *ngFor="let animal of animalList | animalAge:filterByAge"><h3>{{animal.name}} the {{animal.species}}</h3><button class="btn" (click)="editButtonClicked(animal)">Edit</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionChosenFromMenu) {
    this.filterByAge = optionChosenFromMenu;
  }
}
