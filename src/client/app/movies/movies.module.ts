import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieFormComponent } from './movieform.component';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [CommonModule, MoviesRoutingModule, ReactiveFormsModule],
  declarations: [MoviesComponent, MovieFormComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
