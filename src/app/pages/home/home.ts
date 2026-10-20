import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';

@Component({
  imports: [Hero, Services],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
