import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
@Component({
    moduleId: module.id,
    selector: 'sd-form',
    template: `
        <form (ngSubmit)="onMovieSubmit()" [formGroup]="formGroupMovie">
            <input formControlName="movieTitle" type="text"  placeholder="titre du film"/>
            <span [hidden]="formGroupMovie.controls.movieTitle.valid">*</span>
            <br>
            <input formControlName="movieDirector" type="text"  placeholder="réalisateur"/>
            <span [hidden]="formGroupMovie.controls.movieDirector.valid">*</span>
            <br>
            <button type="submit">Ajouter</button>
        </form>

        {{ formGroupMovie.value | json }}
        {{ formGroupMovie.status }}
    `
})
export class MovieFormComponent implements OnInit{
    
    formGroupMovie: FormGroup;
    
    constructor(public fb: FormBuilder ){

    }

    ngOnInit(){
        // this.formGroupMovie = new FormGroup({
        //     movieTitle: new FormControl(),
        //     movieDirector: new FormControl()
        // })

        this.formGroupMovie = this.fb.group({
            movieTitle: ['', Validators.required],
            movieDirector: ['', Validators.required],
        });

    }
    onMovieSubmit(){
        console.log(this.formGroupMovie);
    }
}