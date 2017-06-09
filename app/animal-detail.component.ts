import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-detail',
  template: `
    <div *ngIf="showAnimalDetail">
      <ul>
        <li>Age:{{animalDetail.age}}</li>
        <li>Sex:{{animalDetail.sex}}</li>
      </ul>
    </div>
  `
})

export class AnimalDetailComponent {

}
