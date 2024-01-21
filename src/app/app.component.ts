import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { environment } from '../environments/environment.development';

import { CardComponent } from './ui/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'a-labs';
  url = environment.apiUrl
}
