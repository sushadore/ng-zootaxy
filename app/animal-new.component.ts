import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h3>New Animal</h3>
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
        <option [value]=""></option>
        <option [value]="f">Female</option>
        <option [value]="m">Male</option>
      </select>
    </div>
    <div class="form-group">
      <label>Diet:</label>
      <select class="form-control" #newDiet>
        <option [value]=""></option>
        <option [value]="herbivore">Herbivore</option>
        <option [value]="omnivore">Omnivore</option>
        <option [value]="carnivore">Carnivore</option>
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
        <option [value]=""></option>
        <option [value]="sorrow">Serengeti Sorrow</option>
        <option [value]="joyless">Joyless Jungle</option>
        <option [value]="agony">Arctic Agony</option>
        <option [value]="dread">Desert Dread</option>
      </select>
    </div>
    <div class="form-group">
      <label>Number of Caretakers:</label>
      <input class="form-control" #newCaretakers>
    </div>
    <button class="btn" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newSex.value, newDiet.value, newLike.value, newDislike.value, newCaretakers.value); newName.value=''; newAge.value=''; newSex.value=''; newDiet.value=''; newLike.value=''; newDislike.value=''; newCaretakers.value='';">Add Animal</button>

  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age :number, sex: string, diet: string, like: string, dislike: string, location: string, caretakers: number) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, sex, diet, like, dislike, location, caretakers);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
