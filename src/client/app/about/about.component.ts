import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  /*contact: string = "contactez-nous";
  email: string = "svd.phan@gmail.com";
  movieTitle: string = "GOT";

  onClick(evt: any, userName:string){
    console.log(evt ,userName);
  }*/

  features = [
    { description: 'd1 sqdf' },
    { description: 'd qsdf' },
    { description: 'd   sdfg' },
    { description: 'd4 ssd' },
  ]
}
