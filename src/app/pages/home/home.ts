import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';

@Component({
  imports: [Hero],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
