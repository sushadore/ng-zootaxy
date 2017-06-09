import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let animal of animalList"><h3>{{animal.name}} the {{animal.species}}</h3><button class="btn" (click)="editButtonClicked(animal)">Edit</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
