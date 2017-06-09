import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h4>Filter Animals By:</h4>
  <div class="row">
    <div class="col-xs-3">
      <select class="form-control" (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngAnimals">Young Animals</option>
        <option value="matureAnimals">Mature Animals</option>
      </select>
    </div>
  </div>
  <ul>
    <li *ngFor="let animal of animalList | animalAge:filterByAge"><h3>{{animal.name}} the {{animal.species}}</h3>
    <h4>{{animal.name}} is a {{animal.age}} year old {{animal.sex}} who likes {{animal.like}} but dislikes {{animal.dislike}}. {{animal.name}} is {{animal.diet}}, lives in {{animal.location}},  and has a total of {{animal.caretakers}} caretakers.</h4>

    <button class="btn" (click)="editButtonClicked(animal)">Edit</button></li><hr>
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
