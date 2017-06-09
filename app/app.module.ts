import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './animal-new.component';
import { EditAnimalComponent } from './animal-edit.component';
import { AnimalDetailComponent } from './animal-detail.component';
import { AnimalAgePipe } from './animal-age.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AnimalListComponent,
    NewAnimalComponent,
    EditAnimalComponent,
    AnimalDetailComponent,
    AnimalAgePipe
   ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
