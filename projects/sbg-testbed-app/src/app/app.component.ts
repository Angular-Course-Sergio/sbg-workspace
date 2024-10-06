import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SbgSideMenuComponent } from 'sbg-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SbgSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sbg-testbed-app';
}
