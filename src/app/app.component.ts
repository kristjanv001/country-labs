import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './ui/card.component';
import { MapComponent } from './map/map.component';
import { MenuButtonComponent } from './ui/menu-btn.component';
import { DropDownMenuComponent } from './ui/dropdown-menu.component';
import { TimeTableComponent } from './timetable/timetable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    CardComponent, 
    MapComponent,
    MenuButtonComponent,
    DropDownMenuComponent,
    TimeTableComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'A-Labs';
}
