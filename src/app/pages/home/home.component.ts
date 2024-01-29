import { Component } from '@angular/core';
import { BasicInfoComponent } from '../../components/basic-info/basic-info.component';
import { DetailedInfoAccordionComponent } from '../../components/detailed-info/detailed-info-accordion.component';
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BasicInfoComponent, DetailedInfoAccordionComponent, MapComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
