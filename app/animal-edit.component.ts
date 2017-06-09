import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `

    <div *ngIf="childSelectedAnimal">
      <h3>Update  {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
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
          <option [value]=""></option>
          <option [value]="f">Female</option>
          <option [value]="m">Male</option>
        </select>
      </div>
      <div class="form-group">
        <label>Diet:</label>
        <select class="form-control" [(ngModel)]="childSelectedAnimal.diet">
          <option [value]=""></option>
          <option [value]="herbivore">Herbivore</option>
          <option [value]="omnivore">Omnivore</option>
          <option [value]="carnivore">Carnivore</option>
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
          <option [value]=""></option>
          <option [value]="sorrow">Serengeti Sorrow</option>
          <option [value]="joyless">Joyless Jungle</option>
          <option [value]="agony">Arctic Agony</option>
          <option [value]="dread">Desert Dread</option>
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
