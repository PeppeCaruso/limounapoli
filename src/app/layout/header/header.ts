import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../data/site';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly links = NAV_LINKS;
}