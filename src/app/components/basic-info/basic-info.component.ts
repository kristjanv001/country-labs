import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { CardComponent } from '../../ui/card.component';
// import { AirportService } from '../../core/services/airport.service';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './basic-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // TODO!!!
})
export class BasicInfoComponent {
  // airportName = inject(AirportService).getAirportName();
}