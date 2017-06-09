import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <button class="btn" *ngIf="!newAnimalForm" (click)="showNewAnimalForm()">Add New Captive</button>
    <div *ngIf="newAnimalForm">
      <div class="form-group">
        <label>Species:</label>
        <input class="form-control" #newSpecies>
      </div>
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" #newName>
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input class="form-control" #newAge>
      </div>
      <div class="form-group">
        <label>Sex:</label>
        <select class="form-control" #newSex>
          <option></option>
          <option>female</option>
          <option>male</option>
        </select>
      </div>
      <div class="form-group">
        <label>Diet:</label>
        <select class="form-control" #newDiet>
          <option></option>
          <option>herbivorous</option>
          <option>omnivorous</option>
          <option>carnivorous</option>
          </select>
        </div>
      <div class="form-group">
        <label>Especially Likes:</label>
        <input class="form-control" #newLike>
      </div>
      <div class="form-group">
        <label>Especially Dislikes:</label>
        <input class="form-control" #newDislike>
      </div>
      <div class="form-group">
        <label>Location:</label>
        <select class="form-control" #newLocation>
          <option></option>
          <option>Serengeti Sorrow</option>
          <option>Tropic Tedium</option>
          <option>Arctic Agony</option>
          <option>Desert Dread</option>
        </select>
      </div>
      <div class="form-group">
        <label>Number of Caretakers:</label>
        <input class="form-control" #newCaretakers>
      </div>
      <button class="btn" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newSex.value, newDiet.value, newLike.value, newDislike.value, newLocation.value, newCaretakers.value); newSpecies.value=''; newName.value=''; newAge.value=''; newSex.value=''; newDiet.value=''; newLike.value=''; newDislike.value=''; newLocation.value=''; newCaretakers.value=''; showNewAnimalForm()">Add Captive</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  newAnimalForm: boolean = false;

  submitForm(species: string, name: string, age :number, sex: string, diet: string, like: string, dislike: string, location: string, caretakers: number) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, sex, diet, like, dislike, location, caretakers);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  showNewAnimalForm() {
    if(this.newAnimalForm === true) {
      this.newAnimalForm = false;
    } else {
      this.newAnimalForm = true;
    }
  }
}
