import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  styleUrls: ['./app.component.css'],
  template: `
  <div *ngIf="hero" class="details">
    <h2>{{hero.name}} details!</h2>
    <div><label>ID: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
