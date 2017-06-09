import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `

    <div *ngIf="childSelectedAnimal">
      <h3>Update {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
      <div class="form-group">
        <label>Species:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
      </div>
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
      </div>
      <div class="form-group">
        <label>Sex:</label>
        <select class="form-control" [(ngModel)]="childSelectedAnimal.sex">
          <option></option>
          <option>female</option>
          <option>male</option>
        </select>
      </div>
      <div class="form-group">
        <label>Diet:</label>
        <select class="form-control" [(ngModel)]="childSelectedAnimal.diet">
        <option></option>
        <option>herbivorous</option>
        <option>omnivorous</option>
        <option>carnivorous</option>
          </select>
        </div>
      <div class="form-group">
        <label>Especially Likes:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.like">
      </div>
      <div class="form-group">
        <label>Especially Dislikes:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.dislike">
      </div>
      <div class="form-group">
        <label>Location:</label>
        <select class="form-control" [(ngModel)]="childSelectedAnimal.location">
        <option></option>
        <option>Serengeti Sorrow</option>
        <option>Tropic Tedium</option>
        <option>Arctic Agony</option>
        <option>Desert Dread</option>
        </select>
      </div>
      <div class="form-group">
        <label>Number of Caretakers:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
      </div>
      <button class="btn" (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
