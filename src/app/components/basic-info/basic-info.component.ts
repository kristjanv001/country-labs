import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { CardComponent } from '../../ui/card.component';
import { CountryService } from '../../core/services/country.service';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './basic-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // ❗️
})
export class BasicInfoComponent {
  country = inject(CountryService).country;

  constructor() {
    effect(() => {
      console.log(this.country()?.name.common);
    });
  }

}