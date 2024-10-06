import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-sbg-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sbg-side-menu.component.html',
})
export class SbgSideMenuComponent {
  isAutheticated = input(false);
  title = input('APX');
  subTitle = input('Corp');

  titleColor = input<TitleColor>(TitleColor.purple);

  onSingOut = output();
  onSingIn = output();
}
