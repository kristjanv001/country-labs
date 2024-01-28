import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './ui/card.component';
import { MapComponent } from './components/map/map.component';
import { DropDownMenuComponent } from './components/header/dropdown-menu.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { DetailedInfoAccordionComponent } from './components/detailed-info/detailed-info-accordion.component';
import { HeaderComponent } from './components/header/header.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CardComponent,
    MapComponent,
    DropDownMenuComponent,
    DetailedInfoComponent,
    DetailedInfoAccordionComponent,
    HeaderComponent,
    BasicInfoComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Country-Labs';
}
