import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './ui/card.component';
import { MapComponent } from './components/map/map.component';
import { DropDownMenuComponent } from './components/header/dropdown-menu.component';
import { TimeTableComponent } from './components/timetable/timetable.component';
import { HeaderComponent } from './components/header/header.component';
import { AirportInfoComponent } from './components/airport-info/airport-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    CardComponent, 
    MapComponent,
    DropDownMenuComponent,
    TimeTableComponent,
    HeaderComponent,
    AirportInfoComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'A-Labs';
}
